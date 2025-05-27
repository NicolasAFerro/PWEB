import React, { useState } from 'react';
import './CardBook.css';
const CardBook = ({ book }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);

  function toogleDetails() {
    console.log('to aqui');
    setShowDetails(prev => !prev);
  }

  function addToLocalStorageList() {
    const booksList = JSON.parse(localStorage.getItem('myBookList')) || [];

    const alreadyExists = booksList.some(livro => livro.id === book.id);
    if (alreadyExists) {
      //alert('Este livro já está na lista.');
      setModalMessage('Este livro já está na lista.');
      return;
    }

    const newBookList = [...booksList, book];
    localStorage.setItem('myBookList', JSON.stringify(newBookList));
    //alert('Livro adicionado com sucesso!');
    setModalMessage('Livro adicionado com sucesso!');
    let teste = JSON.parse(localStorage.getItem('myBookList')) || [];
    console.log(teste);
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
        </div>
      )}
      <button onClick={toogleDetails}>
        {showDetails ? 'ver menos' : 'ver detalhes'}{' '}
      </button>

      <button onClick={addToLocalStorageList}>Adicionar a lista</button>

      {modalMessage && <div className='modal'>{modalMessage}</div>}
    </div>
  );
};

export default CardBook;
