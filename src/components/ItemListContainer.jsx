import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const { categoria } = useParams()

  console.log(categoria)

  const productos = [
    { id: 1, nombre: "Tequeños", descripcion: "12 Tequeños Congelados", stock: 5, categoria: "Congelados" },
    { id: 2, nombre: "Pizza", descripcion: "Pizza de harina de maiz", stock: 10, categoria: "Congelados" },
    { id: 3, nombre: "Tres Leches", descripcion: "Torta dulce Tres Leches", stock: 15, categoria: "Postres" },
    { id: 4, nombre: "Cachapa", descripcion: "Cachapa Venezolana", stock: 25, categoria: "Calientes" },
    { id: 5, nombre: "Arepa", descripcion: "Arepa Venezolana", stock: 30, categoria: "Calientes" },
    { id: 6, nombre: "Quesillo", descripcion: "Quesillo Venezolano", stock: 35, categoria: "Postres"}
  ]

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getProductos
    .then((res) => {
    })
    .catch((error) => {
      console.log(error)
    })

  const filteredProducts = productos.filter((productos) => productos.categoria === categoria)
  return (
    <>
      {
        categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />
      }
    </>
  )
}

export default ItemListContainer;
