import { User } from "./User"

export interface Page {

    page: number
    per_page: number
    total: number
    total_pages: number
    results: User[]

  }