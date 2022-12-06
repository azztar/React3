
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './components/ErrorFetch'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const [location, setLocation] = useState()
  const [locationInput, setLocationInput] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let URL

    if (locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`
    } else {
      const randomIdLocation = Math.floor(Math.random() * 126) + 1
      URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
    }

    axios.get(URL)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        setHasError(true)
        console.log(err)
      })
  }, [locationInput])

  const handleSubmit = e => {
    e.preventDefault()
    setLocationInput(e.target.inputSearch.value)
  }

  return (
    <div className="App">
      <div className='prueba'>
        <img className='banner' src="images/Rick1.gif" alt="" />
      </div>
      <div className='img__container'>
        <img className='img__title' src="images/title.svg" alt="" />
      </div>
      <form className='form__container' onSubmit={handleSubmit}>
        <input className='form__text' id='inputSearch' type="text" />
        <button class>Search</button>
      </form>
      {
        hasError ?
          <ErrorFetch />
          :
          <>
            <LocationInfo location={location} />
            <div className='residents-container'>
              {
                location?.residents.map(url => (
                  <ResidentCard key={url} url={url} />
                ))
              }
            </div>
          </>
      }

    </div>
  )
}

export default App
