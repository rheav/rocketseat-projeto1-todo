import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import TaskBoard from "./components/TaskBoard/TaskBoard";

const localStorageKey = "todo:savedTasks";

export interface TaskProp {
	id: string;
	content: string;
	isDone: boolean;
}

function App() {
	const [tasks, setTasks] = useState<TaskProp[]>([]);

	function loadSavedTasks() {
		const savedTasks = localStorage.getItem(localStorageKey);
		if (savedTasks) {
			setTasks(JSON.parse(savedTasks));
		}
	}

	useEffect(() => {
		loadSavedTasks();
	}, []);

	function setTasksAndSave(newTasks: TaskProp[]) {
		setTasks(newTasks);
		localStorage.setItem(localStorageKey, JSON.stringify(newTasks));
	}

	function addTask(taskContent: string) {
		setTasksAndSave([
			...tasks,
			{
				id: crypto.randomUUID(), //nativo do browser pra gerar ID
				content: taskContent,
				isDone: false,
			},
		]);
	}

	function deleteTaskById(taskId: string) {
		const newTasksAfterDelete = tasks.filter((task) => task.id !== taskId);

		setTasksAndSave(newTasksAfterDelete);
	}

	function toggleTaskCompletedById(taskId: string) {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) {
				return {
					...task,
					isDone: !task.isDone,
				};
			}
			return task;
		});

		setTasksAndSave(newTasks);
	}

	return (
		<>
			<Header onAddTask={addTask} />
			<TaskBoard
				tasks={tasks}
				onDelete={deleteTaskById}
				onDone={toggleTaskCompletedById}
			/>
		</>
	);
}

export default App;
