const ProjectInput = ({ label, isTextArea, ref, ...props }) => {
    const inputClasses = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return (
        <div className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {isTextArea
                ? <textarea ref={ref} className={inputClasses} {...props} />
                : <input ref={ref} className={inputClasses} {...props} />
            }
        </div>
    )
}

export default ProjectInput;