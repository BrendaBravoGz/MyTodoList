import React from "react";
import Checkbox from "./Checkbox";
const TaskList =props=>{
    const {list, setList} = props;
    const onChangeStatus = e =>{
        const {name, checked} = e.target;
        const updateList = list.map(item=>({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        const chk = list.map(item=>(
            <Checkbox key = {item.id} data={item} onChange={onChangeStatus}/>
        ));
        setList(updateList);
    };
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };
    const chk = list.map(item=>(
        <Checkbox key={item.id} data={item} onChange={onChangeStatus}/>
    ));
    return (
    <div className="todo-list">
        {list.length ? chk:"No hay tareas"}
        {list.length ? (
            <p>
                <button className="button-red" onClick={onClickRemoveItem}>
                    Eliminar
                </button>
            </p>
        ) : null}
    
    </div>
    );
};

export default TaskList;