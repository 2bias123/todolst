import React, {useState,useEffect} from 'react'
import './style.css'
import {TextField , Button } from '@mui/material';
import GetTaskLst from './GetTasks';
import db  from './firebase.js';
import { addDoc, collection , onSnapshot, query, serverTimestamp,orderBy } from 'firebase/firestore';


const q = query(collection(db,'todos'),orderBy('timestamp','desc'))
export default function TodoCard(){
    const [todos,setTodos]=useState([]);
    const [titleInput, setTitleInput]=useState('');
    const [descriptionInput,setDescriptionInput] = useState('');

    useEffect(()=>{
        onSnapshot(q,(snapshot)=>{
            setTodos(snapshot.docs.map(doc=>({
                id : doc.id,
                item : doc.data()
            })
                ))
        })
    },[titleInput])

    const addTask = (e) => {
        e.preventDefault()
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
                <form>
                    <TextField id="outlined-basic" label="Add Todo" variant="outlined" style={{margin:"0px 5px"}} size="small" 
                    onChange={(e)=>setTitleInput(e.target.value)} value={titleInput} />
                    <TextField id="outlined-basic2" label="Add Description" variant="outlined" style={{margin:"0px 5px"}} size="small" 
                    onChange={(e)=>setDescriptionInput(e.target.value)} value={descriptionInput}/>
                    <Button variant="contained" color="primary" onClick={addTask}>Add Todo</Button>
                </form>
                <ul>
                    {todos.map(item=> <GetTaskLst key={item.id} arr={item} />)}
                </ul>
            </div>
        </div>
    )
}