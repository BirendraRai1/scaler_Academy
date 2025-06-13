import { useState, useCallback, useEffect } from "react";
import "./App.css";

const API_URL = `https://www.googleapis.com/books/v1/volumes`;

const debounce = (mainFunction, delay) => {
  let timerId;
  return function (...args) {
    console.log("args is",...args)
    clearTimeout(timerId);
    timerId = setTimeout(()=>mainFunction(...args), delay);
  };
};

/* timerId = setTimeout(mainFunction(...args), delay);
Immediate Invocation: mainFunction(...args) is being invoked immediately because the 
parentheses () are used. Instead, you want to pass a reference to the function for 
setTimeout to execute after the delay.
*
*
*
*****/ 

function App() {
  const [query,setQuery] = useState("")
  const [results,setResults] = useState([])
  const [cart,setCart] = useState([])
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState(1)
  const [loading,setLoading] = useState(false)

  // Function to fetch books from API
  const fetchBooks = useCallback(
    async(searchQuery,pageNum)=>{
      if(!searchQuery){
        setResults([])
        return
      }
      setLoading(true)
      try{
        const response = await fetch(`${API_URL}?q=${searchQuery}&page=${pageNum}`)
        const data = await response.json()
        console.log("data is",data)
        setResults(data.items)
        setTotalPages(data.totalItems)
      }catch(error){
        console.error("Error fetching books:",error)
      }finally{
        setLoading(false)
      }
    },[]
  )



  // Debounced version of fetchBooks
  const debouncedFetchBooks = useCallback(debounce(fetchBooks,500),[fetchBooks])
  // const debouncedFetchBooks = useCallback((fetchBooks,500),[fetchBooks])
  console.log("debouncedFetchBooks is",debouncedFetchBooks)

  // Handle search on button click or Enter key
  const handleSearch =()=>{
    fetchBooks(query,1)
  }

  const handleKeyPress = (e)=>{
    if(e.key==='Enter')
      handleSearch()
  }

  // Handle search input change
  const handleSearchChange = (e)=>{
    const value = e.target.value
    setQuery(value)
    setPage(1)
    debouncedFetchBooks(value,1)
  }

  // Handle pagination
  const handleNextPage = ()=>{
    if(page<totalPages){
      const nextPage = page +1
      setPage(nextPage)
      fetchBooks(query,nextPage)
    }
  }

  const handlePrevPage = ()=>{
    if(page>1){
      const prevPage = page-1
      setPage(prevPage)
      fetchBooks(query,prevPage)
    }
  }

  //Add book to cart
  const addToCart = (book)=>{
    setCart((prevCart)=>[...prevCart,book])
  }

  return (
    <div>
      <h1>Book Search App</h1>
      {/* Search Input */}
      <div>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* Search Results */}
      <div>
        <h2>Search Results</h2>
        {loading && <p>Loading....</p>}
        {!loading && results.length === 0 && <p>No results found</p>}
        <ul>
          {results.map((book) => (
            <li key={book.id}>
              {book.volumeInfo
.title} by {book.volumeInfo.authors}
              <button onClick={() => addToCart(book)}>Add to cart</button>
            </li>
          ))}
        </ul>
        {/* Pagination */}
        {results.length > 0 && (
          <div>
            <button disabled={page === 1} onClick={handlePrevPage}>
              Previous
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button disabled={page === totalPages} onClick={handleNextPage}>
              Next
            </button>
          </div>
        )}
      </div>
      {/* Cart */}
      <div>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((book, index) => (
              <li key={index}>
                {book.volumeInfo
.title} by {book.volumeInfo.authors}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
