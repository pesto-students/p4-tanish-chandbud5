import { createStore } from 'redux'
import stepOperator from './steps/Reducer'

const store = createStore(stepOperator)

export default store