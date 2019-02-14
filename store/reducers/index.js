import { combineReducers } from 'redux';

import { trendingData } from './TrendingData';
import { details } from './Details';
import {top} from './Top'

export default combineReducers({
    trendingData,
    details,
    top
})