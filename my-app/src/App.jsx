import SearchBar from "./components/SearchBar.jsx";
import Book from "./components/book.jsx"
import './App.css'
import Footer from "./components/footer.jsx";
import Cart from "./components/Cart.jsx";
import Profile from "./components/profile.jsx";
import Landing from "./components/landing.jsx";
import Login from "./components/login.jsx";
import { createBrowserRouter} from "react-router";

function App() {


  return (
    <div className="flex flex-col gap-10">
      <div className="mb-6 flex flex-row-reverse gap-3">
          <SearchBar ></SearchBar>
          <Cart></Cart>
          <Profile></Profile>
      </div>
      <Landing></Landing>
        <Login></Login>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
            <Book></Book>
        </div>

      <Footer></Footer>
    </div>
  )
}

export default App
