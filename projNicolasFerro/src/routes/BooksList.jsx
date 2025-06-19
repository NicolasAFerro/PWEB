import React, { useState, useEffect } from 'react';
import CardBook from '../components/CardBook';

const BooksList = () => {
  const [lsBooks, setLsBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTitle, setSearchTitle] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

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
      setFilteredBooks(booksNotInMyList);
    } catch (erro) {
      console.error('Erro ao buscar livros:', erro);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  function addToLocalStorageList(book, timeStarReading, timeEndReading) {
    //pego meus favoritos do local stograge
    const booksList = JSON.parse(localStorage.getItem('myBookList')) || [];

    const updatedBook = {
      ...book, // copia todos os atribuitos do parametro book e acrescenta alguns
      timeStarReading,
      timeEndReading,
      isInList: true,
    };

    // pega todos que já estavam e da o push com o novo
    const updatedList = [...booksList, updatedBook];
    localStorage.setItem('myBookList', JSON.stringify(updatedList));
    alert('livro adicionado com sucesso');

    setLsBooks(prev => prev.filter(b => b.id !== book.id));
    handleClearSearch();
    setFilteredBooks(prev => prev.filter(b => b.id !== book.id));
  }

  function handleSearch() {
    const filtered = lsBooks.filter(book =>
      book.volumeInfo.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') //https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
        .includes(searchTitle.toLowerCase()),
    );
    setFilteredBooks(filtered);
  }
  function handleClearSearch() {
    setSearchTitle('');
    setFilteredBooks(lsBooks);
  }

  if (loading) {
    return (
      <p className='text-center text-gray-500 text-lg mt-10'>
        Carregando livros...
      </p>
    );
  }

  return (
    <div className='max-w-5xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>
        Lista de Livros
      </h1>
      <div className='flex flex-col sm:flex-row gap-3 mb-6 justify-center'>
        <input
          type='text'
          placeholder='Digite um título de livro'
          value={searchTitle}
          onChange={e => setSearchTitle(e.target.value)}
          className='border border-gray-300 rounded px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
        <button
          onClick={handleSearch}
          className='bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition'
        >
          Pesquisar
        </button>
        <button
          onClick={handleClearSearch}
          className='bg-gray-300 text-gray-800 px-5 py-2 rounded hover:bg-gray-400 transition'
        >
          Limpar
        </button>
      </div>
      <ul className='grid grid-cols-1 gap-6'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => {
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
          })
        ) : (
          <p>Livro não encontrado</p>
        )}
      </ul>
    </div>
  );
};

export default BooksList;
