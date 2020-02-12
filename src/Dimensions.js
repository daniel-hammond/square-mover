import React, {Component} from 'react'
import {connect} from 'react-redux'
import {resize} from './redux/actions'
import _ from 'lodash'

function safeParseInt(str) {
	return parseInt(str, 10) || 0;
}

class Dimensions extends Component {
	constructor(props) {
		super(props);
		this.state = _.pick(this.props, 'width', 'height');

		this.debouncedResize = _.debounce(
			() => this.onResize(),
			this.props.debounceMs
		);
	}

	onResize() {
		let targetWidth = Math.max(safeParseInt(this.state.width), 1);
		let targetHeight = Math.max(safeParseInt(this.state.height), 1);
		this.setState({width: targetWidth, hieght: targetHeight});
		this.props.resize(targetWidth, targetHeight);
	}

	onChangeX(e) {
		this.setState({width: e.target.value});
		this.debouncedResize();
	}

	onChangeY(e) {
		this.setState({height: e.target.value});
		this.debouncedResize();
	}

	onBlur() {
		this.debouncedResize.cancel();
		this.onResize();
	}

	render() {
		const {width, height} = this.state;

		return (
			<form className='dimensions'>
				<label>Dimensions:</label>
				<input type='number' min='1' value={width} onChange={e => this.onChangeX(e)} onBlur={() => this.onBlur()} />
				<span>&nbsp;X&nbsp;</span>
				<input type='number' min='1' value={height} onChange={e => this.onChangeY(e)} onBlur={() => this.onBlur()} />
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
