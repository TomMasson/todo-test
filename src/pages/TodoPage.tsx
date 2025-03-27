import NewTodoForm from "../components/NewTodoForm";
import TodoList from "../components/TodoList";
import useTodo from "../hooks/useTodo";

/**
 * TodoPage component handles the main state and logic for ou todo list application
 */
function TodoPage() {
	const { todos, handleAddTodo, handleToggleTodo } = useTodo();

	return (
		<>
			<h1>Awesome Todo List</h1>
			<TodoList todos={todos} toggleTodo={handleToggleTodo} />
			<NewTodoForm handleNewTodo={handleAddTodo} />
		</>
	);
}

export default TodoPage;
