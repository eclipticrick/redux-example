
const redux = require('redux');
const console = require('better-console');

// Get reducers
const reducers = require('./reducers');

// Create redux'store
const store = redux.createStore(reducers);

// Helper functions
const logStep = (nr) => console.info('Step ' + nr);
const logState = () => console.log(store.getState());


// Step 1
logStep(1);
logState();

// Get actions
const actions = require('./actions');

// Step 2
logStep(2);
store.dispatch(actions.createDoc('some document'));
logState();


// Step 3
logStep(3);
store.dispatch(actions.createDoc('some other document'));
logState();


// Step 4
logStep(4);
store.dispatch(actions.updateDoc(0, 'updated document'));
logState();

// Step 5
logStep(5);
store.dispatch(actions.deleteDoc(1));
logState();


// Get actionType's map
const actionTypeMap = require('./actions/actionTypeMap');

// Step 6
logStep(6);

store.dispatch({
    type: actionTypeMap.OTHER_MESSAGE,
    message: 'New message'
});

logState();


