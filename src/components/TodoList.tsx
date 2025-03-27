import { customSort } from "../utils/tools";
import { Todo } from "../utils/types";
import TodoItem from "./TodoItem";

interface TodoListProps {
	todos: Todo[];
	toggleTodo: (todoId: string) => void;
}

/**
 * TodoList component. Generate the list of differents todos and sort them by 'undone' first
 */
function TodoList({ todos, toggleTodo }: TodoListProps) {
	const sortTodosByStatus = <T extends { isDone: boolean }>(a: T, b: T) => {
		return +a.isDone - +b.isDone;
	};

	const sortedTodos = customSort(todos, sortTodosByStatus);

	return (
		<div>
			{sortedTodos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggleTodo={toggleTodo}
				></TodoItem>
			))}
		</div>
	);
}

export default TodoList;
