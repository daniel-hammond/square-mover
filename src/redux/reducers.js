import {
	CHANGE_SIZE,
	START_MOVE,
	MOVE_UP,
	MOVE_LEFT,
	MOVE_RIGHT,
	MOVE_DOWN,
	MOVE_TO,
	END_MOVE
} from './actions'

const INITIAL_SQUARE = {
	width: 10,
	height: 10,
	x: 0,
	y: 0,
	isMoving: false
};
function square(state = INITIAL_SQUARE, action) {
	switch (action.type) {
		case CHANGE_SIZE:
			return Object.assign({}, state, {
				width: action.width,
				height: action.height
			});
		case START_MOVE:
			return Object.assign({}, state, {isMoving: true});
		case MOVE_LEFT:
			return Object.assign({}, state, {x: state.x - 1});
		case MOVE_UP:
			return Object.assign({}, state, {y: state.y - 1});
		case MOVE_RIGHT:
			return Object.assign({}, state, {x: state.x + 1});
		case MOVE_DOWN:
			return Object.assign({}, state, {y: state.y + 1});
		case MOVE_TO:
			return Object.assign({}, state, {
				x: action.x,
				y: action.y
			});
		case END_MOVE:
			return Object.assign({}, state, {isMoving: false});
		default:
			return state;
	}
}

export default square;
