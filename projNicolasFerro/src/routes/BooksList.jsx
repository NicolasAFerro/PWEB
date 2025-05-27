import React, { useState, useEffect } from 'react';
import CardBook from '../components/CardBook';

const BooksList = () => {
  const [lsBooks, setLsBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchBooks() {
    setLoading(true);
    const url =
      'https://www.googleapis.com/books/v1/volumes?q=a&langRestrict=pt&maxResults=40';

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Erro na resposta: ${response.status}`);

      const data = await response.json();

      const booksInLocalStorage =
        JSON.parse(localStorage.getItem('myBookList')) || [];
      const savedIds = booksInLocalStorage.map(book => book.id);

      const booksNotInMyList = data.items.filter(
        book => !savedIds.includes(book.id),
      );
      setLsBooks(booksNotInMyList);
    } catch (erro) {
      console.error('Erro ao buscar livros:', erro);
    } finally {
      setLoading(false);
    }
  }

  //o use effect tem []mouting, [v]updating, return()unmouting
  useEffect(() => {
    fetchBooks();
  }, []);

  function addToLocalStorageList(book, timeStarReading, timeEndReading) {
    const booksList = JSON.parse(localStorage.getItem('myBookList')) || [];

    const alreadyExists = booksList.some(livro => livro.id === book.id);
    if (alreadyExists) {
      alert('Este livro já está na lista.');
      return;
    }

    const updatedBook = {
      ...book,
      timeStarReading,
      timeEndReading,
      isInList: true,
    };

    const updatedList = [...booksList, updatedBook];
    localStorage.setItem('myBookList', JSON.stringify(updatedList));

    setLsBooks(prev => prev.filter(b => b.id !== book.id));
  }

  if (loading) {
    return <p>Carregando livros...</p>;
  }

  return (
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        {lsBooks.map(book => {
          const cleanBook = {
            buyLink: book.saleInfo.buyLink,
            price: book.saleInfo.listPrice,
            id: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            categories: book.volumeInfo.categories,
            image: book.volumeInfo.imageLinks?.thumbnail,
          };
          return (
            <CardBook
              key={book.id}
              book={cleanBook}
              isInList={false}
              onAdd={addToLocalStorageList}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default BooksList;
