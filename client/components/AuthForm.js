import React, { Component } from 'react';

class AuthForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			email: '',
			password: '',
		};
	}
	
	onSubmit(event) {
		event.preventDefault();
		
		const { email, password } = this.state;
		
		this.props.onSubmit({ email, password });
	}
	
	render() {
		const { email, password } = this.state;
		const { errors } = this.props;
		
		return (
			<div className="row">
				<form className="col s6" onSubmit={this.onSubmit.bind(this)}>
					<div className="input-field">
						<input type="text" value={email} placeholder="email"
						       onChange={e => this.setState({ email: e.target.value })}/>
					</div>
					<div className="input-field">
						<input type="password" value={password} placeholder="password"
						       onChange={e => this.setState({ password: e.target.value })}/>
					</div>
					
					<div className="errors">
						{errors.map(error => <div key={error}>{error}</div>)}
					</div>
					
					<button className="btn">Submit</button>
				</form>
			</div>
		);
	}
}

export default AuthForm;