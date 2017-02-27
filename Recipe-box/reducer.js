const reducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_RECIPE':
			return {
				...state,
				[action.name]: action.value
			}; 
		case 'DELETE_RECIPE':  
			const copy = {...state};
			delete copy[action.name];
			return copy; 
		case 'EDIT_RECIPE':
			if (action.newName in state) {
				return {
					...state,
					[action.newName]: action.value
				};
			} else {
			  const copy = {...state};
			  delete copy[action.previousName];
				return {
					...copy,
					[action.newName]: action.value
				};
			}
		default:
			return state;
	}
};

export default reducer;