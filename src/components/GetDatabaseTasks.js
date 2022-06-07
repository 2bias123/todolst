import React, { useState, useEffect} from "react"
import db from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
   
export default function Tasks(){
    //This gets the wanted collection from firestore
    const ref = firebase.firestore().collection('Todo')

    const [tasks,setTasks] = useState([])
    
    /**
     Iterates over the documents in the given collection 
     and retrives all datafields as an object. Then adds that object to 
     an empty array. When all documents have been iterated over it 
     transfers the value of the arry to state
     */
    function getTasks(){
        ref.onSnapshot((querySnapshot)=>{
            const items = []
            querySnapshot.forEach((doc)=>{
                items.push(doc.data())
            })
            setTasks(items)
        })
    }
    
    
    useEffect(()=>{
        getTasks()
    },[])

    return tasks
}   