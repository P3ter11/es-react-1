import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './SingleBooks.css';
import { CommentArea } from './CommentArea';

export const SingleBooks = (title, img, value) => {
    const [selected, setIsSelected] = useState(false);

    const handleClick = () =>{
        setIsSelected(!selected);
    }



      const api = "https://striveschool-api.herokuapp.com/api/books/:asin/comments/";

      const [commentList, setCommentList] = useState([]); 
  
      const [comment, setComment] = useState("");

      const handleAddComment = async () =>{
        try{
          await fetch('https://striveschool-api.herokuapp.com/api/comments', {
            method: 'POST', 
            
            headers: {
              'Content-Type': 'application/json', 
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ2MGE4YmEzM2ZjOTAwMTk2NTgzZGMiLCJpYXQiOjE3MTA2MDI3NjUsImV4cCI6MTcxMTgxMjM2NX0.yBQl59etN21AW2nSIeKWaI307gdQ3giLEXo_vtXBZHw'
            },
            body: JSON.stringify({
              comment: value,
              asin : book.asin,
            }),
            
          })
        }catch (error){
          console.log(error);
        }
      }


      const handleShowComments = async () =>{
        try{
          const response = await fetch(api);
          const data = await response.json();
          setCommentList(data);

        }catch(error){
          console.log(error);
        }
      }

    

    


  return (
    <Card className ={selected ? "selected-card custom-card" : "custom-card"} onClick={handleClick}>
        <Card.Img className="custum-img" variant="top" src={img} alt="" />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            {selected && <CommentArea> 
              <div className='d-flex justify-content-between my-2'>
                <Button variant="primary" onclick={handleAddComment}>Aggiungi Commento</Button>
                <Button variant="success" onclick={handleShowComments}>Visualizza lista</Button>
              </div>
            </CommentArea> }
        </Card.Body>
       
    </Card>
  )
}
