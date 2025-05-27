import React, { useState } from 'react';
import CardBook from '../components/CardBook';

const MyList = () => {
  const [myBookList, setMyBookList] = useState(() => {
    return JSON.parse(localStorage.getItem('myBookList')) || [];
  });

  return (
    <div>
      <h2>to na minha lista</h2>
      <ul>
        {myBookList &&
          myBookList.map(book => {
            return <CardBook key={book.id} book={book}></CardBook>;
          })}
      </ul>
    </div>
  );
};

export default MyList;
