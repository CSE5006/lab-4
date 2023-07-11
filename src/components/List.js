function Task(props) {
	return (
		<li>{ props.description }</li>
	);
}

function List(props) {
	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				<Task description='Learn React'/>
				<Task description='Learn JSX'/>
				<Task description='Build a React App'/>
			</ul>
		</div>
	);
}

export default List;
