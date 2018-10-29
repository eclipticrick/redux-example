
const actionTypeMap = require('./actionTypeMap');

// Create
const createDoc = (doc) => {
    return {
        type: actionTypeMap.CRUD_CREATE,
        desc: 'An action to create new doc',
        doc
    };
};

// Delete
const deleteDoc = (index) => {
    return {
        type: actionTypeMap.CRUD_DELETE,
        desc: 'An action to delete one doc',
        index
    };
};

// Update
const updateDoc = (index, doc) => {
    return {
        type: actionTypeMap.CRUD_UPDATE,
        desc: 'An action to update doc',
        doc,
        index
    };
};

module.exports = {createDoc, deleteDoc, updateDoc};