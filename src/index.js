import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends Component {
	render() {
		return (
			<button className="square"
					onClick={()=> this.props.onClick()}
			>
				{this.state.value}
			</button>
		);
	}
}

class Board extends Component {

	constructor(props){
		super(props);
		this.state = {
			squeres: Array(9).fill(null)
		};
	}

	renderSquare(i : number) {
		return (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />)
	}

	handleClick(i){
		const squares = this.state.square.slice();
		squares[i] = 'X';
		this.setState({squares: squares});
	}

	render() {
		const status = 'Next player: X';

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}



ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
