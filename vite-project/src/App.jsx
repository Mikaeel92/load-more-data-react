import React, { useEffect, useState } from 'react'

const App = () => {

  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${ count === 0 ? 0 : count * 20 }`)
      const data = await response.json()
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
  }, [])

  if(errorMsg !== null) {
    return <div>Error, {errorMsg} Data Is Loading... Please Wait</div>
  }

  if(loading) {
    return <div> Data Is Loading... Please Wait</div>
  }

  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <div className='grid grid-cols-4 gap-4'>
      {
        products && products.length ?
        products.map((item, index) => (
          <div className='p-4 gap-2 flex flex-col rounded-md border border-gray-500' key={index}>
            <img
            src={item.thumbnail}
            alt={item.title}
            className='h-[200px] w-[200px]'
            />
            <p>{item.title}</p>
          </div>
        ))
        : null
      }
      </div>
    </div>
  )
}

export default App