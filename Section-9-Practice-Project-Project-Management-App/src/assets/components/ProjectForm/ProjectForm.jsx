import { useRef } from "react";
import ProjectInput from "./ProjectInput";
import Modal from "../Modal/Modal";

const ProjectForm = ({ cancelHandler, onAdd }) => {
    const modalRef = useRef();
    const title = useRef();
    const description = useRef();;
    const dueDate = useRef();


    const saveHandler = () => {
        const project = {
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value
        }

        if (project.title.trim() === "" ||
            project.description.trim() === "" ||
            project.dueDate.trim() === "") {
            modalRef.current.open();
            return;

        }

        onAdd(project);
    }


    return (
        <>
            <Modal ref={modalRef} buttonCaption="Ok">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-8">
                    <button onClick={cancelHandler} className="text-stone-800 hover:text-stone-950">Cancel</button>
                    <button onClick={saveHandler} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </menu>
                <form >
                    <ProjectInput ref={title} label="Title" type="text" />
                    <ProjectInput ref={description} label="Description" isTextArea={true} />
                    <ProjectInput ref={dueDate} label="Due date" type="date" />
                </form>
            </div >

        </>
    );
}

export default ProjectForm;