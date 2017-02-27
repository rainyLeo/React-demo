// Actions
const actionCreators = {
	addRecipe(name, value) {
	  return {
			type: 'ADD_RECIPE',
			name,
			value
	  };
	},
	deleteRecipe(name) {
	  return {
			type: 'DELETE_RECIPE',
			name
	  };
	},
	editRecipe(newName, value, previousName) {
		return {
			type: 'EDIT_RECIPE',
			newName,
			value,
			previousName
		};
	}	
};

export default actionCreators;