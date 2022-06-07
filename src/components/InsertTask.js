import React, {useState} from 'react'
import db from './firebase'
import Tasks from './GetDatabaseTasks'
import './style.css'

export default function TodoCard(){
    const[taskTitle,setTaskTitle] = useState('')
    const[taskDescription,setDescription]=useState('')

    const taskInfo = {
        Title : taskTitle,
        Discription : taskDescription,
        Finished : false
    }

    
    const handleClick = () =>{
        db.collection('Todo').doc('Task1').set({taskInfo})
        document.getElementById('title').value = ''
        document.getElementById('disc').value = ''
    }
    
    return(
        <div>
            <div className="CardBox">
                <div className="inputfields">
                    <input id='title' type='text' onChange={(e)=>setTaskTitle(e.target.value)} placeholder='Tasktitle' required/>
                    <input id='disc' type={'text'} onChange={(e)=>setDescription(e.target.value)} placeholder='Task description'/>
                    <button onClick={()=> handleClick()}>Submit</button>
                </div>
            </div>
        </div>
    )
}