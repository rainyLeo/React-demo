import React, { Component, PropTypes } from 'react';
import RecipeItem from './RecipeItem';

export default class RenderRecipe extends Component {
	static propTypes = {
		recipeData: PropTypes.object.isRequired,
		editRecipe: PropTypes.func.isRequired,
		deleteRecipe: PropTypes.func.isRequired
	}
	
	render() {
		const { recipeData, editRecipe, deleteRecipe } = this.props;
		let recipeList = [];
		
		for (let prop in recipeData) {
			if (recipeData.hasOwnProperty(prop)) {
				recipeList.push(
					<RecipeItem 
						key={prop}
						name={prop} 
						recipeArray={recipeData[prop]}
						editRecipe={editRecipe}
						deleteRecipe={deleteRecipe}
					/>);
			}
		}
		
		return (
			<div>
				{recipeList}
			</div>
		);
	}
}
