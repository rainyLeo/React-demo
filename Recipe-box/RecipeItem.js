import React, { Component, PropTypes } from 'react';

class EditRecipe extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		recipeArray: PropTypes.array.isRequired,
		onToggle: PropTypes.func.isRequired,
		editRecipe: PropTypes.func.isRequired,
		style: PropTypes.object.isRequired
	}
	
	render() {
		const { name, recipeArray, onToggle, editRecipe, style } = this.props;
		let input, textArea;
		
		return (
			<div style={style}>
				<h3>Edit a Recipe</h3>

				<div>
					<em>Recipe</em>
					<input 
						defaultValue={name}
						ref={(node) => {
							input = node;
						}}
					/>
				</div>

				<div>
					<em>Ingredients</em>
					<textarea 
						defaultValue={recipeArray.join(',')}
						ref={(node) => {
							textArea = node;
						}}
					></textarea>
				</div>

				<div>
					<button onClick={() => {
						let newName = input.value.trim();
						if (!newName) {
							newName = 'untitled';
						}
						const newValue = textArea.value.trim().split(',');
						editRecipe(newName, newValue, name);
						onToggle();
					}}>
						Edit Recipe
					</button>
					<button onClick={onToggle}>
						Close
					</button>
				</div>
			</div>
		);
	}
}


export default class RecipeItem extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		recipeArray: PropTypes.array.isRequired,
		editRecipe: PropTypes.func.isRequired,
		deleteRecipe: PropTypes.func.isRequired
	}
	
	state = { display: false }
	
	toggleState = () => {
		this.setState({ display: !this.state.display });
	}

	render() {
		const { name, recipeArray, editRecipe, deleteRecipe } = this.props;
		const style = this.state.display ? {display: 'block'} : {display: 'none'};
		
		return (
			<div>
				<h3>{name}</h3>

				{recipeArray.map(item => {
					return <li key={item}>{item}</li>;
				})}

				<button onClick={() => deleteRecipe(name)}>Delete</button>

				<button onClick={this.toggleState}>Edit</button>

				<EditRecipe 
					name={name} 
					recipeArray={recipeArray} 
					style={style} 
					onToggle={this.toggleState}
					editRecipe={editRecipe}
				/>

			</div>
		);
	}
}