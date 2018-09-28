import React from 'react';

class InitialStep extends React.Component {
	initialDivStyle = {
		border: 'solid black 2px',
		backgroundColor: 'lightGray',
		padding: '10px',
		margin: '5px',
		width: '200px',
		height: '200px',
	};
	render() {
		return (
			<div>
				<h5> Please choose the workflow</h5>
				<div style={this.initialDivStyle}>
					<span />
				</div>
			</div>
		);
	}
}

export default InitialStep;
