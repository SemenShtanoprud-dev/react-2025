import Tasks from "../Tasks/Tasks";

const SelectedProject = ({ project, onDeleteProjectHandler, tasks, handleAddTask, handleRemoveTask }) => {
    const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button onClick={onDeleteProjectHandler} className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>

            <Tasks tasks={tasks} handleAddTask={handleAddTask} handleRemoveTask={handleRemoveTask} />
        </div>
    )
};
export default SelectedProject;