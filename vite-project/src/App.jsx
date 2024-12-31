import React, { useEffect, useState } from 'react'

const App = () => {

  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch('')
    } catch (error) {

    }
  }

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
    <div className='text-green-700 text-3xl'>App</div>
  )
}

export default App