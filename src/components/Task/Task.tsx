import trashImg from "../../assets/trash.svg";
import checkImg from "../../assets/check.svg";
import styles from "./Task.module.css";
import { TaskProp } from "../../App";

interface Props {
	task: TaskProp;
	onDelete: (taskId: string) => void;
	onDone: (taskId: string) => void;
}

const Task = ({ task, onDelete, onDone }: Props) => {
	return (
		<div className={styles.task}>
			<button
				onClick={() => onDone(task.id)}
				className={task.isDone ? styles.checkContainerDone : styles.checkContainer}
			>
				{task.isDone ? (
					<img
						src={checkImg}
						alt=""
					/>
				) : (
					<div></div>
				)}
			</button>
			<p className={task.isDone ? styles.contentDone : ""}>{task.content}</p>
			<button
				className={styles.deleteBtn}
				onClick={() => onDelete(task.id)}
			>
				<img
					src={trashImg}
					alt=""
				/>
			</button>
		</div>
	);
};

export default Task;
