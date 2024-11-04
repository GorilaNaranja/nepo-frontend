import { createContext, useState } from 'react'

// Este es el que tenemos que consumir
export const FiltersContext = createContext({location: 'all'})

// Este es el que nos provee de acceso al contexto
export function FiltersProvider ({ children }: any) {
  const [filters, setFilters] = useState({
    location: 'all'
  })

  return (
    <FiltersContext.Provider value={{
      filters, 
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}