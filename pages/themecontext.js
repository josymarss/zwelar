import { createContext } from 'react'
import theme from './theme.module.css'

const Theme = createContext(theme.default)

export default Theme