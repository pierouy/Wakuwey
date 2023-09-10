import useCounter from '../hooks/useCounter.js'

const ItemCount = ({ contador }) => {
  const {count, increment, decrement} = useCounter(contador, 1)

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>
  )
}

export default ItemCount