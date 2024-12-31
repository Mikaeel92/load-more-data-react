import React, { useEffect, useState } from 'react'

const App = () => {

  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${ count === 0 ? 0 : count * 20 }`)
      const data = response.json()
      if(data && data.products) {
        setProducts((prevData) => [...prevData, ...data.products])
        setLoading(false)
      }
    } catch (error) {
      setErrorMsg(error)
      setLoading(false)
    }}

  useEffect(() => {
    fetchData()
  }, [count])

  if(errorMsg !== null) {
    return <div>Error, {errorMsg} Data Is Loading... Please Wait</div>
  }

  if(loading) {
    return <div> Data Is Loading... Please Wait</div>
  }

  return (
    <div className='text-green-700 text-3xl'>App</div>
  )
}

export default App