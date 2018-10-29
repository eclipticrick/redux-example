
const actionTypeMap = require('./actionTypeMap');

// Create
const createDoc = (doc) => {
    return {
        type: actionTypeMap.CRUD_CREATE,
        doc
    };
};

// Delete
const deleteDoc = (index) => {
    return {
        type: actionTypeMap.CRUD_DELETE,
        index
    };
};

// Update
const updateDoc = (index, doc) => {
    return {
        type: actionTypeMap.CRUD_UPDATE,
        index,
        doc
    };
};

module.exports = { createDoc, deleteDoc, updateDoc };
