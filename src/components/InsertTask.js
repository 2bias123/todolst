import React, {useState,useEffect} from 'react'
import './style.css'
import {TextField , Button } from '@mui/material';
import GetTaskLst from './GetTasks';
import db  from './firebase.js';
import { addDoc, collection , onSnapshot, query, serverTimestamp,orderBy } from 'firebase/firestore';

//Orders the databse in descending order based on the timestamps
const q = query(collection(db,'todos'),orderBy('timestamp','desc'))
export default function TodoCard(){
    const [todos,setTodos]=useState([]);
    const [titleInput, setTitleInput]=useState('');
    const [descriptionInput,setDescriptionInput] = useState('');

    /**
     * This runs every time titleinput is updated
     * Iterates trough the elements in the database and adds it to the todos hook
     */
    useEffect(()=>{
        onSnapshot(q,(snapshot)=>{
            setTodos(snapshot.docs.map(doc=>({
                id : doc.id,
                item : doc.data()
            })))})
    },[titleInput])

    /**
     * Adds a document to the database whit the defined fields when called
     */
    const addTask = (e) => {
        e.preventDefault();
        addDoc(collection(db,'todos'),{
            todoTitle : titleInput,
            todoDescription : descriptionInput,
            timestamp: serverTimestamp()
        })
        setTitleInput('')
        setDescriptionInput('')
    }

    return(
        <div>
            <div className="CardBox">
                <h1>2bias' To do list</h1>
                <form>
                    <TextField id="outlined-basic" label="Add Task" variant="outlined" style={{margin:"0px 5px"}} size="small" 
                    onChange={(e)=>setTitleInput(e.target.value)} value={titleInput} />
                    <TextField id="outlined-basic2" label="Add Description" variant="outlined" style={{margin:"0px 5px"}} size="small" 
                    onChange={(e)=>setDescriptionInput(e.target.value)} value={descriptionInput}/>
                    <Button variant="contained" color="primary" onClick={addTask}>Add Task</Button>
                </form>
                <ul>
                    {todos.map(item=> <GetTaskLst key={item.id} arr={item} />)}
                </ul>
            </div>
        </div>
    )
}