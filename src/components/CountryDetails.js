import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const CountryDetails = () => {
    
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(true);
    const {capital} = useParams();


    const fetchCountryData = async () => {
        const response = await fetch(`https://restcountries.com/v2/capital/${capital}`)
        const data = await response.json()
        setCountry(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchCountryData()
    }, [])

  return (
    <main className='country_details'>
        <Link to={'/'} className='Link'>
            <button>
                <ArrowBackIcon className='backarrow'/>
                Back
            </button>
        </Link>

        {loading ? (
            <h1 className='loading'>Loading...</h1>
        ): (
            country.map((c) => {
                const { numericCode, flag, name, nativeName, population, region, 
                    subregion, capital, topLevelDomain, currencies, 
                    languages, borders } = c
                
                return(

                    <section>
                        <div className="image_container">
                            <img src={flag} alt={name} />
                        </div>
                        <div className='details'>
                            <h1>{name}</h1>
                            <div className="info">
                                <div className="left_sec">
                                    <p>Population: <span>{population}</span></p>
                                    <p>Region: <span>{region}</span></p>
                                    <p>Sub Region: <span>{subregion}</span></p>
                                    <p>Capital: <span>{capital}</span></p> 
                                </div>
                                <div className="right_sec">
                                    <p>Top Level Domain: <span>{topLevelDomain}</span></p>
                                    <p>Currencies: <span>{currencies[0].code}</span></p>
                                    <p>Languages: <span>{languages[0].name}</span></p>
                                </div>
                            </div>
                            <div className="borders">
                                <div><p>Border Countries: </p></div>
                                { borders ? (
                                <div>
                                    {borders.map((border) => {
                                    return(
                                        <ul key={border}>
                                        <li>{border}</li>
                                        </ul>
                                    )
                                    })}
                                </div>) : (<div><ul><li>no borders...</li></ul></div>) }
                            </div>
                        </div>
                    </section>

                )
            })
        )}

    </main>
  )
}

export default CountryDetails