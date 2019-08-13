import { createContext } from 'react'
import Store from './models/Store'

export default createContext(Store.create({}))
