import React, { Component } from 'react';

export default class AddRecipe extends Component {
	render() {
		const { style, addRecipe, onToggle } = this.props;
		let input;
		let textArea;
		
		return (
			<div style={style}>
				<h3>Add a Recipe</h3>

				<div>
					<em>Recipe</em>
					<input placeholder='Recipe Name'
						ref={(node) => {
							input = node;
						}}
					/>
				</div>

				<div>
					<em>Ingredients</em>
					<textarea placeholder='Enter Ingredients, Seperated by commas'
						ref={(node) => {
							textArea = node;
						}}
					></textarea>
				</div>

				<div>
					<button onClick={() => {
						onToggle();
						const textAreaValue = textArea.value.trim().split(',');
						if (!input.value.trim()) {
							input.value = 'untitled';
						}
						addRecipe(input.value, textAreaValue);
						input.value = '';
						textArea.value = '';
					}}>
						Add Recipe
					</button>
					<button onClick={onToggle}>Close</button>
				</div>
			</div>
		);
	}
}
