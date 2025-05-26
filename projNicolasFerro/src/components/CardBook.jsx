import React from 'react';

const CardBook = ({ book }) => {
  console.log('to aqui');
  return (
    <div>
      <p>titulo:{book.Tile}</p>
      <p>autor: {book.author}</p>
      <p>genero:{book.categories}</p>
      <img src={book.image} alt='' />
    </div>
  );
};

export default CardBook;
