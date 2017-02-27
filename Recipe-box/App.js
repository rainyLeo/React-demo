import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddRecipe from './AddRecipe';
import RenderRecipe from './RenderRecipe';
import actionCreators from './actions';

class App extends Component {
	state = { display: false }
	
	toggleState = () => {
		this.setState({
			display: !this.state.display
		});
	}
	
	render() {
		const { recipeData, actions } = this.props;
		return (
			<div>
				<RenderRecipe 
					recipeData={recipeData} 
					editRecipe={actions.editRecipe}
					deleteRecipe={actions.deleteRecipe}
				/>
				<AddRecipe 
					style={this.state.display ? {display: 'block'} : {display: 'none'}}
					onToggle={this.toggleState}
					addRecipe={actions.addRecipe}
				/>
				<button 
					onClick={this.toggleState}
					style={{marginTop: '15px', fontSize: '1em', backgroundColor: '#738fd3'}}
				>Add Recipe</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	recipeData: state
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

