import NoProjectImg from "../../no-projects.png";
import Button from "../Button/Button";

const NoProjectSelected = ({ createProjectHandler }) => {
    return (
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src={NoProjectImg} />
            <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
            <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
            <div className="mt-8">
                <Button onClick={createProjectHandler}>Create new project</Button>
            </div>
        </div>
    );
};

export default NoProjectSelected;