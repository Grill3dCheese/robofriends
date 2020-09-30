import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false
		}
	}
	
	componetDidCatch(error, info) {
		this.setState({ hasError: true })
	}
	
	render() {
		if (this.state.hasError) {
			return <h1>Ooops! That is not good, you've reached an error.</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundry;