function Task(props) {
	return (
		<li>{ props.description } <input type="checkbox" checked={props.completed} readOnly /></li>
	);
}

function List(props) {

	let tasks = [];

	for (let i = 0; i < props.tasks.length; i++) {
		let description = props.tasks[i].description;
		let completed = props.tasks[i].completed;
		tasks.push(<Task description={description} completed={completed} />);
	}

	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				{ tasks }
			</ul>
		</div>
	);
}

export default List;
