import React, { useState } from 'react';

//tem que importar aqui
import addLogo from '../assets/add.svg';
import deleteLogo from '../assets/delete.svg';

//uso de CallBacks para a 'classe'
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
    <div className='bg-white shadow-md rounded-lg p-4 flex flex-col'>
      <p className='text-lg font-semibold mb-1 text-gray-800'>
        Titulo:{book.title}
      </p>
      <p className='text-sm text-gray-600 mb-1'>
        Autor: {book.author?.join(', ')}
      </p>
      <p className='text-sm text-gray-600 mb-3'>
        Gênero: {book.categories?.join(', ')}
      </p>
      <img
        className='w-full h-44 object-contain rounded mb-4'
        src={book.image}
        alt=''
      />
      {showDetails && (
        <div className='details'>
          {book.price && (
            <p className='text-sm text-gray-600 mb-1'>
              preço: {book.price.currencyCode}
              {book.price.amount}
            </p>
          )}
          {book.buyLink && (
            <p className='text-sm text-gray-600 mb-1'>
              onde comprar:{book.buyLink}
            </p>
          )}
          {book.timeStarReading && (
            <p className='text-sm text-gray-600 mb-1'>
              Data Inicio: {book.timeStarReading}
            </p>
          )}
          {book.timeEndReading && (
            <p className='text-sm text-gray-600 mb-1'>
              Data Inicio: {book.timeEndReading}
            </p>
          )}
          {!book.timeEndReading &&
            !book.timeStarReading &&
            !book.buyLink &&
            !book.price && (
              <p className='text-sm text-gray-600 mb-1'>Sem mais informações</p>
            )}
        </div>
      )}
      <button
        onClick={toogleDetails}
        className='self-start text-indigo-600 hover:text-indigo-800 font-medium mb-3 transition'
      >
        {showDetails ? 'ver menos' : 'ver detalhes'}{' '}
      </button>

      {isInList ? (
        <button
          className='p-2 rounded hover:bg-red-100 transition'
          onClick={() => onDelete(book.id)}
        >
          <img src={deleteLogo} />
        </button>
      ) : (
        <button
          className='p-2 rounded hover:bg-green-100 transition'
          onClick={toogleFormInput}
        >
          <img src={addLogo} />
        </button>
      )}

      {showFormInput && (
        <form
          className='border border-gray-300 rounded p-4 mt-3 space-y-4 bg-gray-50'
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
          <h3 className='text-md font-semibold mb-2'>Periodo de Leitura</h3>
          <label
            htmlFor='dtStartReading'
            className='block mb-1 font-medium text-gray-700'
          >
            Data de Inicio
          </label>
          <input
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            required
            type='date'
            id='dtStartReading'
            onChange={e => {
              setTimeStartReading(e.target.value);
              //console.log(timeStarReading);
            }}
          />
          <label
            htmlFor='dtEndReading'
            className='block mb-1 font-medium text-gray-700'
          >
            Data de Fim
          </label>
          <input
            required
            type='date'
            id='dtEndReading'
            onChange={e => setTimeEndReading(e.target.value)}
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
          <input
            type='submit'
            text='Ok'
            className='w-full cursor-pointer bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition'
          />
        </form>
      )}
    </div>
  );
};

export default CardBook;
