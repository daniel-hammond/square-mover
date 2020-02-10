async function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export const DIRECTIONS = {
	UP: 'UP',
	LEFT: 'LEFT',
	DOWN: 'DOWN',
	RIGHT: 'RIGHT'
};

export const CHANGE_SIZE = 'CHANGE_SIZE';
export function changeSize(width, height) {
	return {type: CHANGE_SIZE, width, height};
}

export const START_MOVE = 'START_MOVE';
export function startMove() {
	return {type: START_MOVE};
}

export const MOVE_UP = 'MOVE_UP';
export function moveUp() {
	return {type: MOVE_UP};
}

export const MOVE_LEFT = 'MOVE_LEFT';
export function moveLeft() {
	return {type: MOVE_LEFT};
}

export const MOVE_RIGHT = 'MOVE_RIGHT';
export function moveRight() {
	return {type: MOVE_RIGHT};
}

export const MOVE_DOWN = 'MOVE_DOWN';
export function moveDown() {
	return {type: MOVE_DOWN};
}

export const MOVE_TO = 'MOVE_TO';
export function moveTo(x, y) {
	return {type: MOVE_TO, x, y};
}

export const END_MOVE = 'END_MOVE';
export function endMove() {
	return {type: END_MOVE};
}

export function resize(width, height) {
	return function(dispatch, getState) {
		let {x, y} = getState();
		let targetWidth = Math.max(width, 1);
		let targetHeight = Math.max(height, 1);
		dispatch(changeSize(targetWidth, targetHeight));

		if (x < targetWidth && y < targetHeight)
			return;

		dispatch(moveTo(
			Math.min(x, width-1),
			Math.min(y, height-1)
		));
	};
}

export function delayThenMove(ms, direction) {
	return async function(dispatch) {
		dispatch(startMove());
		await delay(ms);

		switch (direction) {
			case DIRECTIONS.UP:
				dispatch(moveUp());
				break;
			case DIRECTIONS.DOWN:
				dispatch(moveDown());
				break;
			case DIRECTIONS.LEFT:
				dispatch(moveLeft());
				break;
			case DIRECTIONS.RIGHT:
				dispatch(moveRight());
				break;
			default:
				break;
		}

		dispatch(endMove());
	};
}
