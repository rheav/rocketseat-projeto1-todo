import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./Header.module.css";
import todoLogo from "../../assets/Logo.svg";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
	onAddTask: (taskContent: string) => void;
}

const Header = ({ onAddTask }: Props) => {
	const [content, setContent] = useState("");

	// função do child component que manuseia a ação local e passa pro parent
	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		onAddTask(content); // recebo a função do parent componenent

		setContent(""); // limpar input
	}

	function handleChangeContent(e: ChangeEvent<HTMLInputElement>) {
		setContent(e.target.value);
	}

	return (
		<header className={styles.header}>
			<img
				src={todoLogo}
				alt=""
			/>

			<form
				action=""
				className={styles.newTaskForm}
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					placeholder="Adicione uma nova tarefa"
					onChange={handleChangeContent}
					value={content}
				/>
				<button>
					Criar <AiOutlinePlusCircle size={20} />
				</button>
			</form>
		</header>
	);
};

export default Header;
