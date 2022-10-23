import React, { useEffect, useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Filter = ({searchCountries, searchInput, setCountries, setLoading}) => {

  const region = [
    {
      name: "Africa",
    },
    {
      name: "Asia",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Europe",
    },
  ]

  const fetchCountriesByRegion = async (region) => {

    if(region!="All"){
      const res = await fetch(`https://restcountries.com/v2/region/${region}`)
      const data = await res.json()
      setCountries(data)
    } else {
      const response = await fetch(`https://restcountries.com/v2/all`)
      const data = await response.json()
      setCountries(data)
      setLoading(false)
    }
    

  }

  useEffect(() => {
    fetchCountriesByRegion()
  }, [])



  return (
    <section className='filter'>
        <div className='inputs'>
            <SearchOutlinedIcon className='icon'/>
            <input
                type='text'
                placeholder='Search for a country...'
                id='search'
                name='search'
                value={searchInput}
                onChange={(e) => searchCountries(e.target.value)}
                autoComplete='off'
            />
        </div>
        <div className='select_region'>
            <select name='select' id='select' value={region.name} onChange={(e) => fetchCountriesByRegion(e.target.value)}>
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Oceania">Oceania</option>
              <option value="Americas">Americas</option>
              <option value="Europe">Europe</option>
            </select>
        </div>
    </section>
  )
}

export default Filter