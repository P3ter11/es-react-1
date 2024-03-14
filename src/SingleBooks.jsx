import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './SingleBooks.css';

export const SingleBooks = (props) => {
    const [selected, setIsSelected] = useState(false);

    const title = props.title;
    const img = props.img

    const handleClick = () =>{
        setIsSelected(!selected);
    }
  return (
    <Card className ={selected ? "selected-card custom-card" : "custom-card"} onClick={handleClick}>
        <Card.Img className="custum-img" variant="top" src={img} alt="" />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
        </Card.Body>
       
    </Card>
  )
}
