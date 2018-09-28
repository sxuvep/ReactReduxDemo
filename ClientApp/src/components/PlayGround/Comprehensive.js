import React from 'react';

class Comprehensive extends React.Component {
	divStyle = {
		border: 'solid black 2px',
		backgroundColor: 'lightBlue',
		padding: '10px',
		margin: '5px',
		width: '200px',
		height: '200px',
	};
	render() {
		return (
			<div style={this.divStyle}>
				<p>this is a comprhensive carrier</p>
			</div>
		);
	}
}

export default Comprehensive;
