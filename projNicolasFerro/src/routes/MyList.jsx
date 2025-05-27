import React, { useEffect, useState } from 'react';
import CardBook from '../components/CardBook';

const MyList = () => {
  const [myBookList, setMyBookList] = useState(() => {
    return JSON.parse(localStorage.getItem('myBookList')) || [];
  });
  function deleteFromLocalStorageList(bookId) {
    const updatedList = myBookList.filter(book => book.id !== bookId);
    localStorage.setItem('myBookList', JSON.stringify(updatedList));
    setMyBookList(updatedList); // <== Atualiza a tela
  }

  return (
    <div>
      <h2>to na minha lista</h2>
      <ul>
        {myBookList &&
          myBookList.map(book => {
            return (
              <CardBook
                key={book.id}
                book={book}
                isInList={book.isInList}
                onDelete={deleteFromLocalStorageList}
              ></CardBook>
            );
          })}
      </ul>
    </div>
  );
};

export default MyList;
