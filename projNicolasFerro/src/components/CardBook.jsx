import React, { useState } from 'react';
import './CardBook.css';
//tem que importar aqui
import addLogo from '../assets/add.svg';
import deleteLogo from '../assets/delete.svg';

//uso de CallBacks para a 'clase'
const CardBook = ({ book, isInList, onDelete, onAdd }) => {
  const [showDetails, setShowDetails] = useState(false);

  const [showFormInput, setShowFormInput] = useState(false);
  const [timeStarReading, setTimeStartReading] = useState();
  const [timeEndReading, setTimeEndReading] = useState();

  function toogleDetails() {
    setShowDetails(prev => !prev);
    setShowFormInput(false);
  }
  function toogleFormInput() {
    setShowFormInput(prev => !prev);
  }

  return (
    <div className='card'>
      <p>titulo:{book.title}</p>
      <p>autor: {book.author?.join(', ')}</p>
      <p>genero: {book.categories?.join(', ')}</p>
      <img src={book.image} alt='' />
      {showDetails && (
        <div className='details'>
          <p>Mais Informações</p>
          {book.price && (
            <p>
              preço: {book.price.currencyCode}
              {book.price.amount}
            </p>
          )}
          {book.buyLink && <p>onde comprar:{book.buyLink}</p>}
          {book.timeStarReading && <p>Data Inicio: {book.timeStarReading}</p>}
          {book.timeEndReading && <p>Data Inicio: {book.timeEndReading}</p>}
        </div>
      )}
      <button onClick={toogleDetails}>
        {showDetails ? 'ver menos' : 'ver detalhes'}{' '}
      </button>

      {isInList ? (
        <button onClick={() => onDelete(book.id)}>
          <img src={deleteLogo} />
        </button>
      ) : (
        <button onClick={toogleFormInput}>
          <img src={addLogo} />
        </button>
      )}

      {showFormInput && (
        <form
          onSubmit={e => {
            e.preventDefault();
            if (timeStarReading > timeEndReading) {
              alert('data de inicio não pode ser maior que data de fim');

              return;
            }
            if (new Date(timeStarReading) > new Date()) {
              alert('data de inicio não pode ser futura');
              return;
            }
            onAdd(book, timeStarReading, timeEndReading);
          }}
        >
          <h3>Periodo de Leitura</h3>
          <label htmlFor='dtStartReading'>Data de Inicio</label>
          <input
            required
            type='date'
            id='dtStartReading'
            onChange={e => {
              setTimeStartReading(e.target.value);
              //console.log(timeStarReading);
            }}
          />
          <label htmlFor=''>Data de Fim</label>
          <input
            required
            type='date'
            id='dtEndReading'
            onChange={e => setTimeEndReading(e.target.value)}
          />
          <input type='submit' text='Ok' />
        </form>
      )}
    </div>
  );
};

export default CardBook;
