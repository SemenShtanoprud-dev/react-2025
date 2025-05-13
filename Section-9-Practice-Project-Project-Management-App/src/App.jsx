import { useState } from "react";
import NoProjectSelected from "./assets/components/NoProjectSelected/NoProjectSelected";
import Sidebar from "./assets/components/Sidebar/Sidebar";
import ProjectForm from "./assets/components/ProjectForm/ProjectForm";
import SelectedProject from "./assets/components/SelectedProject/SelectedProject";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        project: [],
        tasks: [],
    });

    const handleAddTask = (text) => {
        setProjectsState(preState => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                projectId: preState.selectedProjectId,
                id: taskId,
            }

            return {
                ...preState,
                tasks: [newTask, ...preState.tasks],
            }
        });
    }

    const handleRemoveTask = (id) => {
        setProjectsState(preState => {
            return {
                ...preState,
                tasks: preState.tasks.filter(task => task.id !== id),
            }
        });
    }

    const handleStartAddProject = () => {
        setProjectsState(preState => {
            return {
                ...preState,
                selectedProjectId: null,
            }
        });
    }

    const handleAddProject = (projectData) => {
        setProjectsState(preState => {
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId,
            }
            return {
                ...preState,
                project: [...preState.project, newProject],
                selectedProjectId: undefined,
            }
        });
    }

    const cancelProjectHandler = () => {
        setProjectsState(preState => {
            return {
                ...preState,
                selectedProjectId: undefined,
            }
        });
    }

    const handleSelectProject = (projectId) => {
        setProjectsState(preState => {
            return {
                ...preState,
                selectedProjectId: projectId,
            }
        });
    }

    const onDeleteProjectHandler = () => {
        setProjectsState(preState => {
            return {
                ...preState,
                project: preState.project.filter(project => project.id !== projectsState.selectedProjectId),
                selectedProjectId: undefined,
            }
        });
    }

    console.log(`projectsState.tasks`, projectsState.tasks);

    const selectedProject = projectsState.project.find(project => project.id === projectsState.selectedProjectId);
    let content = <SelectedProject
        tasks={projectsState.tasks}
        project={selectedProject}
        onDeleteProjectHandler={onDeleteProjectHandler}
        handleAddTask={handleAddTask}
        handleRemoveTask={handleRemoveTask}
    />;

    if (projectsState.selectedProjectId === null) {
        content = <ProjectForm onAdd={handleAddProject} cancelHandler={cancelProjectHandler} />
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected createProjectHandler={handleStartAddProject} />
    }


    return (
        <main className="h-screen my-8 flex gap-8"
        >
            <Sidebar
                list={projectsState.project}
                onSelectProject={handleSelectProject}
                createProjectHandler={handleStartAddProject}
                onSelectProjectId={projectsState.selectedProjectId}
            />

            {content}
        </main>
    );
}

export default App;
