import NewTask from "./NewTask";

const Tasks = ({ tasks, handleRemoveTask, handleAddTask }) => {
    console.log(`tasks`, tasks);
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask handleAddTask={handleAddTask} />

            {tasks.length > 0
                ? <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((task) => {
                        return (
                            <li key={task.id} className="flex justify-between my-4">
                                <span className="font-bold">{task.text}</span>
                                <button onClick={() => handleRemoveTask(task.id)} class="text-stone-700 hover:text-red-500">Clear</button>
                            </li>
                        )
                    })}
                </ul>
                : <p class="text-stone-800 my-4">This project does not have any task yet.</p>
            }
        </section>
    )
};

export default Tasks;