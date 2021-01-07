import React, {useState} from 'react'
import {Badge, Card, Button, Collapse} from 'react-bootstrap'
// import ReactMarkdown from 'react-markdown'
import parse from 'html-react-parser';


function Job({job}) {
    // State
    const [open, setOpen] = useState(false)

    // JSX Render
    return (
        <Card className="mb-3">
           <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>

                        <Card.Subtitle className="text-muted mb-2">
                            { new Date(job.created_at).toLocaleDateString() }
                        </Card.Subtitle>

                        {/* Badges */}
                        <Badge variant="secondary" className="mr-2">{job.type}</Badge>
                        <Badge variant="secondary">{job.location}</Badge>
                    
                            
                        <p style={{wordBreak : 'break-all'}}>
                            {/* <ReactMarkdown source={job.how_to_apply} /> */}
                            {parse(job.how_to_apply)}
                        </p>
                    </div>
                    <img src={job.company_logo} alt={job.company} className="d-none d-md-block" height="30" />
                </div>
           
                <Card.Text>
                    <Button 
                        onClick={()=>setOpen(preOpen => !preOpen)}
                        variant="primary"
                    >
                        {open ? 'Hide Detail' : 'View Detail'}
                    </Button>
                </Card.Text>
                <Collapse in={open}>
                    <p className="mt-4" style={{fontSize:"15px", fontWeight:"normal"}}>
                        {parse(job.description)}
                    </p></Collapse>
           </Card.Body>
        </Card>
    )
}

export default Job
