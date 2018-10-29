
const actionTypeMap = require('../actions/actionTypeMap');

const otherReducer = (state = 'initial message', action) => {

    switch (action.type) {
        case actionTypeMap.OTHER_MESSAGE: return action.message;
    }

    return state
};

module.exports = otherReducer;
