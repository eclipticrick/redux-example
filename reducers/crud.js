
const actionTypeMap = require('../actions/actionTypeMap');

const initialState = {
    docs: []
};

const crudReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypeMap.CRUD_CREATE:
            return {
                ...state,
                docs: state.docs.concat(action.doc)
            };

        case actionTypeMap.CRUD_DELETE:
            if (action.index >= state.docs.length)
                break;

            state.docs.splice(action.index, 1);

            return {
                ...state,
                docs: state.docs
            };

        case actionTypeMap.CRUD_UPDATE:
            if (action.index >= state.docs.length)
                break;

            state.docs.splice(action.index, 1, action.doc);

            return {
                ...state,
                docs: state.docs
            };
    }
    return state
};

module.exports = crudReducer;
