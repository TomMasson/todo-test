import { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import "./styles.css";
import { initialTodos } from "./utils/data";
import { Todo } from "./utils/types";

export default function App() {
	const [todos, setTodos] = useState<Todo[]>(initialTodos);

	const handleAddTodo = (todoContent: string) => {
		const uniqueId = Date.now().toString();
		const newTodo: Todo = {
			id: uniqueId,
			content: todoContent,
			isDone: false,
		};

		const updatedTodos = [...todos, newTodo];

		setTodos(updatedTodos);
	};

	const handleToggleTodo = (todoId: string) => {
		const todo = todos.find((t) => t.id === todoId);

		if (todo) {
			const updatedTodo: Todo = { ...todo, isDone: !todo.isDone };
			setTodos(
				todos.map((todo) => (todo.id !== todoId ? todo : updatedTodo))
			);
		}
	};

	return (
		<div className="App">
			<h1>Awesome Todo List</h1>
			<TodoList todos={todos} toggleTodo={handleToggleTodo} />
			<NewTodoForm handleNewTodo={handleAddTodo} />
		</div>
	);
}
