import { useState } from "react";

const NewTask = ({ handleAddTask }) => {
    const [enteredTasks, setEnteredTask] = useState("")

    const handleChange = (event) => {
        setEnteredTask(event.target.value);
    }

    const handleClick = () => {
        if (enteredTasks.trim().length === 0) {
            return;
        }

        handleAddTask(enteredTasks)
        setEnteredTask("");
    }

    return (
        <div className="flex item-center gap-4">
            <input
                type="text"
                value={enteredTasks}
                onChange={handleChange}
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    );
}

export default NewTask;