import React from 'react';
import ReactDOM from 'react-dom';

class ProductContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			isStockOnly: false
		}
		
		this.handUserInput = this.handUserInput.bind(this);
	}
	
	handUserInput(filterText, isStockOnly) {
		this.setState({
			filterText: filterText,
			isStockOnly: isStockOnly
		})
	}

  render() {
    return (
      <div>
        <SearchBar 
					filterText={this.state.filterText}
					isStockOnly={this.state.isStockOnly}
					onUserInput={this.handUserInput}
				/>
        <ProductTable 
					products={this.props.products}
					filterText={this.state.filterText}
					isStockOnly={this.state.isStockOnly}
				/>
      </div>
    );
  }
}

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange() {
		this.props.onUserInput(
			this.refs.filterTextInput.value, 
			this.refs.isStockOnlyInput.checked
		)
	}

  render() {
    return (
      <form>
        <input type='text' 
					placeholder='Search...'
					value={this.props.filterText}
					ref='filterTextInput'
					onChange={this.handleChange}
				/>
				<p>
					<input 
						type='checkbox' 
						name='inStock' 
						id='stock' 
						ref='isStockOnlyInput'
						onChange={this.handleChange}
					/>
					{' '}
					<label htmlFor='stock'>Only show products in stock</label>
				</p>
      </form>
    );
  }
}

class ProductTable extends React.Component {


  render() {
		let rows = [];
		let lastCategory = null;
		
		this.props.products.forEach(product => {
			if (product.name.indexOf(this.props.filterText) === -1 || 
				(!product.stocked && this.props.inStockOnly)) {
        return;
      }
			if (product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
			}
			
			rows.push(<ProductRow product={product} key={product.name} />);
			lastCategory = product.category;
		});
		
    return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
  }
}

class ProductCategoryRow extends React.Component {
  render() {
		return <tr><th colSpan='2'>{this.props.category}</th></tr>
  }
}

class ProductRow extends React.Component {

  render() {
    let name = this.props.product.stocked ?
			this.props.product.name :
			<span style={{color: 'red'}}>
				{this.props.product.name}
			</span>;
		
    return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
    );
  }
}


let DATA = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
	<ProductContainer products={DATA} />,
	document.getElementById('app')
);