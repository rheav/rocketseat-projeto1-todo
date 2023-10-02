import Task from "../Task/Task";
import styles from "./TaskBoard.module.css";
import clipboardImg from "../../assets/Clipboard.svg";
import { TaskProp } from "../../App";

interface Props {
	tasks: TaskProp[];
	onDelete: (taskId: string) => void;
	onDone: (taskId: string) => void;
}

const TaskBoard = ({ tasks, onDelete, onDone }: Props) => {
	const doneTasks = tasks.filter((task) => task.isDone).length;
	return (
		<section className={styles.TaskBoard}>
			<header className={styles.header}>
				<div>
					<p>Tarefas criadas</p>
					<span>{tasks.length}</span>
				</div>
				<div>
					<p>Concluídas</p>
					<span>
						{doneTasks} de {tasks.length}
					</span>
				</div>
			</header>
			<div className={styles.list}>
				{tasks.length > 0 ? (
					tasks.map((task) => (
						<Task
							key={task.id}
							task={task}
							onDelete={onDelete}
							onDone={onDone}
						/>
					))
				) : (
					<div className={styles.cleanBoard}>
						<img
							src={clipboardImg}
							alt=""
						/>
						<p>Você ainda não tem tarefas cadastradas</p>
						<p>Crie tarefas e organize seus itens a fazer</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default TaskBoard;
