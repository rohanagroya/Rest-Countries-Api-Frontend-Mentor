import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Filter from './Filter'


const Countries = () => {

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState("")


  const fetchCountriesData = async () => {
    const response = await fetch(`https://restcountries.com/v2/all`)
    const data = await response.json()
    setCountries(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchCountriesData()
  },[]);

  const searchCountries = (searhValue) => {
    setSearchInput(searhValue)

    if(searchInput){
        const filteredCountries = countries.filter((country) => 
            Object.values(country).join("").toLowerCase().includes(searhValue.toLowerCase())
        )
        setFiltered(filteredCountries)
    } else{
        setFiltered(countries)
    }
  }


  return (
    <>
      <Filter searchCountries={searchCountries} searchInput={searchInput} setCountries={setCountries} setLoading={setLoading} />
      {loading ? (
        <h1 className='loading'>Loading...</h1>
      ):(
        <main className='countries'>
          <section className='grid'>
            {searchInput.length > 0 ? (
              filtered.map((country) => {
                const {numericCode, name, population, region, capital, flag} = country
      
                return <article key={numericCode} className='card'>
                        <div className='flag'><img src={flag} alt={name} /></div>
                        <div className='details'>
                            <Link className='Link' key={numericCode} to={capital}><h3>{name}</h3></Link>
                            <h4>Population: <span>{population}</span> </h4>
                            <h4>Region: <span>{region}</span> </h4>
                            <h4>Capital: <span>{capital}</span> </h4>
                        </div>
                </article>
              })
            ) : (            
              countries.map((country) => {
                const {numericCode, name, population, region, capital, flag} = country
      
                return <article key={numericCode} className='card'>
                        <div className='flag'><img src={flag} alt={name} /></div>
                        <div className='details'>
                            <Link className='Link' key={numericCode} to={capital}><h3>{name}</h3></Link>
                            <h4>Population: <span>{population}</span> </h4>
                            <h4>Region: <span>{region}</span> </h4>
                            <h4>Capital: <span>{capital}</span> </h4>
                        </div>
                </article>
              })
            )}
          </section>
        </main>
      )}
    </>
  )
}

export default Countries