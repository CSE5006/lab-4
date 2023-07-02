// ## TaskList.js ##
//
// The TaskList component renders a view for a list of tasks.

const React = require('react');

// Define the TaskList component
const TaskList = (props) => {
  // At the moment the TaskList component is just a hard-coded HTML unordered
  // list. We will be changing this during the lab.
  const element = (
    <div>
      <h1>{ props.heading }</h1>
      <ul>
        <li>Clean my bed</li>
        <li>Finish my homework</li>
        <li>Brush my teeth</li>
      </ul>
    </div>
  );
  return element;
};

// Export the TaskList component
module.exports = TaskList;
