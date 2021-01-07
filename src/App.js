import React, {useState} from 'react';
import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap';

import Job from './Job'; 
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';


// JSX Rendering
function App() {
  const [params, setParams] = useState({})
  const [page, setPage]=useState(1)

  const {jobs, loading, error, hasNextPage } = useFetchJobs(params, page);


  const handleParamChange = (e) => {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-5 container">
      <h1 className="mb-3">Github Jobs</h1>


      {/* Job Pagination */}
      <JobsPagination page={page} setPage={setPage} hasNextPage ={hasNextPage } />


      {/* Search From */}
      <SearchForm params={params} onParamChange={handleParamChange}/>


      {/* Loading Component */}
      {loading && <h1 className="loading-box">Loading ...</h1>}


      {/* Error Component */}
      {error && <h1 className="error-box">Error. Try again ...</h1>}


      {/* Mapping Jobs */}
      {jobs.map(job => {
        return (
          <Job key={job.id} job={job}/>
        )
      })}


    </Container>
  );
}

export default App;
