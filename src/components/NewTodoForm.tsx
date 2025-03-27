import { ChangeEvent, FormEvent, useState } from "react";

interface NewTodoFormProps {
	handleNewTodo: (newTodo: string) => void;
}

function NewTodoForm({ handleNewTodo }: NewTodoFormProps) {
	const [newTodo, setNewTodo] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (newTodo !== "") {
			handleNewTodo(newTodo);
			setNewTodo("");
		} else {
			setError("Please enter text before submitting a new todo");
			setTimeout(() => {
				setError("");
			}, 5000);
		}
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(event.target.value);
		if (error) setError("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="newTask">Ajouter un item</label>
			<input
				type="text"
				id="newTask"
				name="newTask"
				value={newTodo}
				onChange={handleInputChange}
			/>
			<button type="submit">Ajouter</button>
			{error && (
				<p
					style={{ color: "red", fontSize: ".9rem" }}
					data-type="error"
				>
					{error}
				</p>
			)}
		</form>
	);
}

export default NewTodoForm;
