import { combineReducers } from 'redux';
import { trendingData } from './TrendingData';
import { details } from './Details';

export default combineReducers({
    trendingData,
    details
})