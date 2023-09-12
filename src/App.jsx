  import {Routes, Route, BrowserRouter } from "react-router-dom"
  import ItemDetailContainer from "./components/ItemDetailContainer"
  import ItemListContainer from "./components/ItemListContainer"
  import NavBar from "./components/NavBar"


  const App = () => {
    
    return (
      <BrowserRouter>
        
        <NavBar />

        <Routes>
          <Route exact path="/" element={<ItemListContainer />}></Route>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
        </Routes>

      </BrowserRouter>
    )
  }

  export default App