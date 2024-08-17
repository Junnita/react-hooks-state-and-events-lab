import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';
// import "./App.css"

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	function handleToggleDarkMode() {
		setIsDarkMode((isPreviousMode) => !isPreviousMode);
	}

	// replace 'false' with a state variable that can be toggled between true and false
	// this will be used for the Dark Mode Toggle feature
	const modeClass = isDarkMode ? 'App dark' : 'App light';

	return (
		<div className={modeClass}>
			<header>
				<h2>Shopster</h2>
				<button onClick={handleToggleDarkMode}>
					{' '}
					{isDarkMode ? 'Light Mode' : 'Dark Mode'}
				</button>
			</header>
			<ShoppingList items={itemData} />
		</div>
	);
}

export default App;
