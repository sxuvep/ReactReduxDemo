import React from 'react';

class Oral extends React.Component {
	divStyle = {
		border: 'solid black 2px',
		backgroundColor: 'yellow',
		padding: '10px',
		margin: '5px',
		width: '200px',
		height: '200px',
	};
	render() {
		return (
			<div style={this.divStyle}>
				<p>this is a oral carrier</p>
			</div>
		);
	}
}

export default Oral;
