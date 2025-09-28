import {useState,useEffect} from "react"; 
import './App.css'

function App() {
const [books, setBooks] = useState([]);
useEffect(()=>{
fetchBooks();
}, [])
const fetchBooks = async()=>{
  try{
   const response =  await fetch("http://127.0.0.1:8000/api/books/");
   const data = await response.json()
   console.log(data)
  }
  catch(err){
    console.log(err)
  }
}

  return (
    <>
    <h1> Books website</h1>
    <div>
      <input type="text" placeholder="book title..."/>
      <input type="number" placeholder="release date"/>
      <button>add book</button>
    </div>
     </>
  )
}

export default App
