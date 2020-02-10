import React, {Component} from 'react'
import {connect} from 'react-redux'
import {delayThenMove, DIRECTIONS} from './redux/actions'

class ControlButtons extends Component {
	render() {
		const {x, y, width, height, isMoving, delayThenMove, delayMs} = this.props;
		const canMoveLeft = !isMoving && (x > 0);
		const canMoveRight = !isMoving && (x < (width-1));
		const canMoveUp = !isMoving && (y > 0);
		const canMoveDown = !isMoving && (y < (height-1));

		return (
			<div className="control-buttons">
				<button type="button" disabled={!canMoveLeft} onClick={() => delayThenMove(delayMs, DIRECTIONS.LEFT)}>Left</button>
				<button type="button" disabled={!canMoveUp} onClick={() => delayThenMove(delayMs, DIRECTIONS.UP)}>Up</button>
				<button type="button" disabled={!canMoveDown} onClick={() => delayThenMove(delayMs, DIRECTIONS.DOWN)}>Down</button>
				<button type="button" disabled={!canMoveRight} onClick={() => delayThenMove(delayMs, DIRECTIONS.RIGHT)}>Right</button>
			</div>
		);
	}
}

function propsFromState(state) {
	return {
		x: state.x,
		y: state.y,
		width: state.width,
		height: state.height,
		isMoving: state.isMoving
	};
}

export default connect(
	propsFromState,
	{delayThenMove}
)(ControlButtons);
