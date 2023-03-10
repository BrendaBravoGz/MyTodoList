import React, {useState} from "react";
const FromTodo = props =>{
    const {handleAddItem} = props;
    const [description, setDescription] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        console.log(description);
        handleAddItem({
            done:false,
            id: (+new Date()).toString(),
            description
        });
        setDescription("");
    };
    return(
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input
                        type="text"
                        className="text"
                        value={description}
                        onChange={e=> setDescription(e.target.value)}
                    />
                    <button
                    className="button-green"
                    disabled={description ? "" : "disabled"}>
                        +
                    </button>
                </div>
            </div>
        </form>
    )
}
export default FromTodo;