import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import './main.css';

const App = () => {


  return (
    <>
    <NavBar />
    <ItemListContainer greeting={'Bienvenidos a la mejor tienda de comida venezolana por encargo'}/>
    </>
  )
}

export default App