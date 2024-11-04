import { Seller } from '../models/User'
import { FiltersContext } from '../context/filters'
import { useContext } from 'react';

export function useFilters () {
  const { filters, setFilters }: any = useContext(FiltersContext)
  console.log('Filters: ', filters);

  const filterSellers = (sellers: Seller[]): Seller[] => {
    return sellers.filter(seller => {
      return filters.location === 'all' || seller.location === filters.location;
    });
  }

  return { filterSellers, setFilters }
}