import React, {Component} from 'react'
import {connect} from 'react-redux'

class SquareCell extends Component {
	render() {
		let activeClass = this.props.active ? 'active' : '';
		let classNames = `square-cell ${activeClass}`;
		return (
			<div className={classNames}>&nbsp;</div>
		);
	}
}

class SquareRow extends Component {
	render() {
		let {row, cols, pos} = this.props;
		let {x, y} = pos;
		let cells = [];

		for (let i=0; i<cols; i++) {
			let active = (row === y && i === x);

			cells.push(
				<SquareCell key={'col' + i} active={active} />
			);
		}

		return (
			<div className="square-row">
				{cells}
			</div>
		);
	}
}

class Square extends Component {
	render() {
		let {x, y, width, height} = this.props;
		let rows = [];

		for (let i=0; i<height; i++) {
			rows.push(
				<SquareRow key={'row' + i} row={i} cols={width} pos={{x, y}} />
			);
		}

		return (
			<div className="square">
				{rows}
			</div>
		);
	}
}

function propsFromState(state) {
	return {
		width: state.width,
		height: state.height,
		x: state.x,
		y: state.y
	};
}

export default connect(propsFromState)(Square);
