import SearchBar from "./components/SearchBar.jsx";
import Book from "./components/book.jsx"
import './App.css'
import Footer from "./components/footer.jsx";

function App() {


  return (
    <div className="flex flex-col gap-10">
      <div className="mb-6">
          <SearchBar ></SearchBar>
      </div>
      <Book></Book>
      <Footer></Footer>
    </div>
  )
}

export default App
