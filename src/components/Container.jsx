import React, {useState} from 'react'
import FromTodo from './FromTodo'
import TaskList from './TaskList'

const Container =()=>{
    const[list,setList] = useState([]);
    const handleAddItem = addItem =>{
        setList([...list, addItem]);
    };
    return(
        <div>
            <h2>Lista de tareas</h2>
            <FromTodo handleAddItem={handleAddItem}/>
            <TaskList list={list} setList={setList}/>
        </div>
    );
};
export default Container;