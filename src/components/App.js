import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class App extends Component {
	state = {
		language: 'english'
	};

	onLanguageChange = (language) => this.setState({ language });

	render() {
		return (
			<div className="ui container">
				<div>
					Select a language:
					<i className="flag us" onClick={() => this.onLanguageChange('english')} />
					<i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
				</div>
				<ColourContext.Provider value="red">
					<LanguageContext.Provider value={this.state.language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColourContext.Provider>
			</div>
		);
	}
}

export default App;
