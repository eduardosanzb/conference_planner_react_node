import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from 'office-ui-fabric-react/lib/Label';


export default ({ text, route, icon }) => {
	console.log(text);
	return (
		<Link to={`/${route}`}>
			<i className={`ms-Icon ms-Icon--${icon}`} aria-hidden="true">
				<Label>{text}</Label>
			</i>
		</Link>
	);
}