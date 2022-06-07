import { List , ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import db from './firebase.js';
import { doc, deleteDoc } from "firebase/firestore";

const GetTaskLst=({arr})=>{
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={arr.item.todoTitle} secondary={arr.item.todoDescription} />
                </ListItem>
            <DeleteIcon fontSize="large" style={{opacity:0.7}} onClick={() => {deleteDoc(doc(db,'todos',arr.id))}} />
        </List>
    )
};
export default GetTaskLst;