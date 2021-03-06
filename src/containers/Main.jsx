import React from 'react';
import './Main.scss';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Main = () => {
	const history = useHistory();
	return (
		<div className="button-container">
			<Button onClick={() => history.push('/modal-a')} variant="color-a">Button A</Button>
			<Button onClick={() => history.push('/modal-b')} variant="color-b">Button B</Button>
		</div>
	)
}

export default Main;