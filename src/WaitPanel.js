import React, {Component} from 'react'
import {PacmanLoader} from 'react-spinners'
import {connect} from 'react-redux'

class WaitPanel extends Component {
	render() {
		return (
			<div className='wait-panel'>
				<PacmanLoader color="silver" loading={this.props.isMoving} />
			</div>
		);
	}
}

function propsFromState(state) {
	return {isMoving: state.isMoving};
}

export default connect(propsFromState)(WaitPanel);
