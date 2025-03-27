import { useState } from "react";
import { Todo } from "../utils/types";

interface TodoItemProps {
	todo: Todo;
	toggleTodo: (todoId: string) => void;
}

function TodoItem({ todo, toggleTodo }: TodoItemProps) {
	const [isChecked, setIsChecked] = useState<boolean>(todo.isDone);

	const toggleCheck = () => {
		setIsChecked((prev) => !prev);
		toggleTodo(todo.id);
	};

	return (
		<div>
			<label
				style={{
					textDecoration: isChecked ? "line-through" : "none",
					cursor: "pointer",
				}}
			>
				<input
					type="checkbox"
					checked={isChecked}
					onChange={toggleCheck}
				></input>
				{todo.content}
			</label>
		</div>
	);
}

export default TodoItem;
