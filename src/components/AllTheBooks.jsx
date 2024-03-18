import fantasy from '../fantasy.json'
import { SingleBooks } from './SingleBooks'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const AllTheBooks = () => {
  const [inputName, setInputName] = useState ("");

  const filteredValue = fantasy.filter(book =>book.title.toLowerCase().includes(inputName.toLowerCase()))

  return (
    <>
    <br />
      <Form.Label htmlFor="inputName" className='m-2'>Cerca</Form.Label>
        <Form.Control className='mx-2'
          type="text"
          id="keyword"
          placeholder="Inserisci parola chiave"
          value = {inputName}
          onChange={(e) => setInputName(e.target.value)}
          
        />
      <br />
      <div className="row col-11 mx-auto">
        {filteredValue.map((book) => {
          return(
            <div className='col-md-3 g-5'>
              <SingleBooks
              img = {book.img}
              title = {book.title}
              />
            </div>
          )


          })}
      </div>
        
    </>
  )
}

export default AllTheBooks
