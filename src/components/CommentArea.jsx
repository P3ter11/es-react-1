import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const CommentArea = ({value}) => {

    const [value, setValues] = useState("");
  return (
    <>
    <p>Scrivi una recensione</p>
    <InputGroup>
        <Form.Control as="textarea" aria-label="With textarea" value={value} onChange={(e) => setValues(e.target.value)}/>
    </InputGroup>  
    </>
    
  )
}
