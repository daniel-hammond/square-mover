import React, {Component} from 'react'
import {connect} from 'react-redux'
import {resize} from './redux/actions';

class Dimensions extends Component {
	onChangeX(e) {
		let {resize, height} = this.props;
		let width = Math.max(parseInt(e.target.value) || 0, 1);
		resize(width, height);
	}

	onChangeY(e) {
		let {resize, width} = this.props;
		let height = Math.max(parseInt(e.target.value) || 0, 1);
		resize(width, height);
	}

	render() {
		const {width, height} = this.props;

		return (
			<form className='dimensions'>
				<label>Dimensions:</label>
				<input type='number' min='1' value={width} onChange={e => this.onChangeX(e)} />
				<span>&nbsp;X&nbsp;</span>
				<input type='number' min='1' value={height} onChange={e => this.onChangeY(e)} />
			</form>
		);
	}
}

function propsFromState(state) {
	return {
		width: state.width,
		height: state.height
	};
}

export default connect(
	propsFromState,
	{resize}
)(Dimensions);
