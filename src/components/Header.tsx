
import { Filters } from './Filters.tsx'

export function Header ({changeFilters}) {
  return (
    <header>
      <Filters onChange={changeFilters}/>
    </header>
  )
}
