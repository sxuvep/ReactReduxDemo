import React from 'react';
import { connect } from 'react-redux';
import {
	Grid,
	Col,
	Row,
	ButtonToolbar,
	ToggleButtonGroup,
	ToggleButton,
	Radio,
	FormGroup,
	FormControl,
	ControlLabel,
	HelpBlock,
} from 'react-bootstrap';
import InitialStep from './InitialStep';
import AstRadioOptions from './AstRadioOptions';
import Comprehensive from './Comprehensive';
import Oral from './Oral';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showAstOptions: false,
			carrierType: 'empty',

			sampleForm: {
				Accession: 'test',
			},
		};

		this.handleCarrierTypeChange = this.handleCarrierTypeChange.bind(
			this
		);

		this.getSamplePrepFormValiationState = this.getSamplePrepFormValiationState.bind(
			this
		);
	}

	onAstRadioClick = () => {
		this.setState({
			showAstOptions: true,
			carrierType: 'comprehensive',
		});
	};

	handleCarrierTypeChange(e) {
		e.preventDefault();

		var targetValue = e.target.value;
		this.setState({
			showAstOptions: true,
			carrierType: targetValue == 1 ? 'comprehensive' : 'oral',
		});
	}

	getSamplePrepFormValiationState() {
		const length = this.state.sampleForm.Accession.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}

	handleAccessionChange(e) {
		//set state
	}
	renderCarrier(carrierType) {
		switch (carrierType) {
			case 'empty':
				return <InitialStep />;

			case 'comprehensive':
				return <Comprehensive />;

			case 'oral':
				return <Oral />;

			default:
				return <InitialStep />;
		}
	}
	render() {
		return (
			<Grid className="fluid">
				<Row className="show-grid">
					<Col md={3}>
						{this.renderCarrier(this.state.carrierType)}
					</Col>
					<Col md={3}>
						<Radio
							id="astRadio"
							onClick={this.onAstRadioClick}
						>
							AST
						</Radio>
						{this.state.showAstOptions ? (
							<AstRadioOptions
								carrierTypechange={
									this.handleCarrierTypeChange
								}
							/>
						) : null}
					</Col>
				</Row>

				<Row>
					<Col md={4}>
						<form>
							<FormGroup
								controlId="samplePrepForm"
								validationState={this.getSamplePrepFormValiationState()}
							>
								<ControlLabel>Accession ID</ControlLabel>
								<FormControl
									type="text"
									value={this.state.value}
									placeholder="Enter text"
									onChange={this.handleAccessionChange}
								/>
								<FormControl.Feedback />
								<HelpBlock>
									Validation is based on string length.
								</HelpBlock>
							</FormGroup>
						</form>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default connect()(Main);
