import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import "./Todo.css"

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>

                <ListItemText primary="Todo" secondary={props.text} />

          </ListItem>  
          </List>
    )
}

export default Todo
