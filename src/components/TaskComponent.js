import React from 'react'
import { Button, Typography } from '@mui/material'

function TaskComponent({ todo, todos, completed, setTodos, setCompleted }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: "20px"
        }}>
            <Typography variant="h5">{todo}</Typography>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Button variant="text" onClick={() => {
                    
                    // remove todo from setTodos
                    var filteredArr = todos.filter((element) => {
                        return element!==todo
                    });

                    console.log('filtered Array : ',filteredArr)

                    setTodos(filteredArr)

                    // add in setCompleted
                    var newArray = completed
                    completed.push(todo)

                    console.log('updated array',newArray)

                    setCompleted(newArray.reverse())


                }}>✔️</Button>

                <Button variant="text" onClick={()=>{

                    var reentry = ''
                    while(reentry===''){
                        reentry = prompt("Enter a valid task","MAKE SURE TO KEEP ME FILLED")
                    }

                    // search for element in the array for with value of todo
                    const newTodos = [...todos];  // Create a copy
                    newTodos[todos.indexOf(todo)] = reentry;
                    setTodos(newTodos);

                }}>🖊️</Button>

                <Button variant="text" onClick={()=>{

                    var filteredArr = todos.filter((element) => {
                        return element!==todo
                    });

                    console.log('filtered Array : ',filteredArr)

                    setTodos(filteredArr)

                }}>❌</Button>
            </div>
        </div>
    )
}

export default TaskComponent