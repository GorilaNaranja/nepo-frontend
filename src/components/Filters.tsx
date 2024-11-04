import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import '../styles/Filters.css'

export interface Filter {
  location: string
}

export function Filters ({onChange}) {
  const { location, setFilters } = useFilters()

  const locationFilterId = useId()

  const handleChangeLocation = (event: any) => {
    // ⬇️ ESTO HUELE MAL
    // estamos pasando la función de actualizar estado
    // nativa de React a un componente hijo
    setFilters(() => ({
      location: event.target.value
    }))
    onChange((prevState: any) => ({
      ...prevState,
      location: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={locationFilterId}>Location</label>
        <select id={locationFilterId} onChange={handleChangeLocation}>
          <option value='all'>All</option>
          <option value='Spain'>Spain</option>
          <option value='EEUU'>EEUU</option>
          <option value='Italy'>Italy</option>
        </select>
      </div>
      <p>{location}</p>
    </section>
  )
}