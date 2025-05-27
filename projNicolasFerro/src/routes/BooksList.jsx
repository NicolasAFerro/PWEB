import React, { useState, useEffect } from 'react';
import CardBook from '../components/CardBook';

const BooksList = () => {
  const [lsBooks, setLsBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      const url =
        'https://www.googleapis.com/books/v1/volumes?q=a&langRestrict=pt&maxResults=40';

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erro na resposta: ${response.status}`);
        }

        const data = await response.json();
        setLsBooks(data.items || []);
        console.log(data);
      } catch (erro) {
        console.error('Erro ao buscar livros:', erro);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Carregando livros...</p>;
  }

  return (
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        {lsBooks &&
          lsBooks.map(book => {
            let cleanBook = {
              buyLink: book.saleInfo.buyLink,
              price: book.saleInfo.listPrice,
              id: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors,
              categories: book.volumeInfo.categories,
              image: book.volumeInfo.imageLinks.thumbnail,
            };
            return <CardBook key={book.id} book={cleanBook}></CardBook>;
          })}
      </ul>
    </div>
  );
};

export default BooksList;
