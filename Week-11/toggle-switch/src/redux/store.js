import {createStore} from 'redux';
import { toggleReducer } from './Room/reducer';

export const store = createStore(toggleReducer)