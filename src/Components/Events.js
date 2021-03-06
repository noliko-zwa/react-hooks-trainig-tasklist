import React, { useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events = () => {
	const { state } = useContext(AppContext);
	return (
		<>
			<h4>list of event</h4>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>body</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{state.events.map((event, idx) => (
						<Event key={idx} event={event}></Event>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Events;
