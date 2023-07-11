function Task(props) {
	return (
		<li>{ props.description } <input type="checkbox" checked={props.completed} readOnly /></li>
	);
}

function List(props) {

	//// Old For Loop
	// let tasks = [];
	// for (let i = 0; i < props.tasks.length; i++) {
	// 	let description = props.tasks[i].description;
	// 	let completed = props.tasks[i].completed;
	// 	tasks.push(<Task description={description} completed={completed} />);
	// }

	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				{/* { tasks } */}
				{ props.tasks.map(task => <Task description={task.description} completed={task.completed} />) }
			</ul>
		</div>
	);
}

export default List;
