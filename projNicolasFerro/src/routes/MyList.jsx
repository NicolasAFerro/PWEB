import React, { useState } from 'react';
import CardBook from '../components/CardBook';

const MyList = () => {
  const [myBookList, setMyBookList] = useState(() => {
    return JSON.parse(localStorage.getItem('myBookList')) || [];
  });
  function deleteFromLocalStorageList(bookId) {
    const updatedList = myBookList.filter(book => book.id !== bookId);
    localStorage.setItem('myBookList', JSON.stringify(updatedList));
    setMyBookList(updatedList);
  }

  return (
    <div className='max-w-5xl mx-auto p-6'>
      <h2 className='text-3xl font-bold mb-6 text-center text-gray-800'>
        Minha Lista
      </h2>
      <ul className='grid grid-cols-1 gap-6'>
        {myBookList.length > 0 ? (
          myBookList.map(book => {
            return (
              <CardBook
                key={book.id}
                book={book}
                isInList={book.isInList}
                onDelete={deleteFromLocalStorageList}
              />
            );
          })
        ) : (
          <p className='text-lg text-gray-600 mb-1'>Não há itens na lista</p>
        )}
      </ul>
    </div>
  );
};

export default MyList;
