export interface User {
  id: string,
  name: string,
  location: string,
}

export interface Seller extends User {
  status: SellerType,
}

export interface Buyer extends User {
  type: SellerType,
}

export enum SellerType {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED'
}

export enum BuyerStatus {
  BIG_COMPANY = 'BIG_COMPANY',
  SMALL_COMPANY = 'SMALL_COMPANY',
}

