import { useState } from "react"

export default function Player({ name, symbol, isActive, onChangeName }) {

    const [isEditing, setIsEditing] = useState(false)
    const [newName, setNewName] = useState(name)

    const buttonHandler = () => {
        setIsEditing(editing => !editing);

        if (isEditing) {
            onChangeName(symbol, newName)
        }
    }

    const handleChange = (e) => {
        setNewName(e.target.value)
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player-info">
                {isEditing
                    ? <input type="text" required value={newName} onChange={handleChange} />
                    : <span className="player-name">{newName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={buttonHandler}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}