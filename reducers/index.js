const combineReducers = require('redux').combineReducers;
const crud = require('./crud');
const other = require('./others');

// Combine required reducers
const combinedReducers = combineReducers({
    crud,
    other
});

module.exports = combinedReducers;
