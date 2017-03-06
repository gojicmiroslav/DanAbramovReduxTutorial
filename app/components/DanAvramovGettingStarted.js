import React from 'react';
import { Link } from 'react-router';

const DanAvramovGettingStarted = (props) => {
	return(
		<div>
			<h1>Dan Avramov Getting Started</h1>

			<ul>
				<li>
    			<Link to="/redux-counter-example">Redux: React Counter Example</Link>
  			</li>
			</ul>
		</div>
	);
}

export default DanAvramovGettingStarted;