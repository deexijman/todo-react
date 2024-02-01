import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField, Typography, Button } from '@mui/material';
import { useState } from 'react';
import TaskComponent from './components/TaskComponent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {

  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState([])
  const [input, changeInput] = useState('')


  return (
      <Box style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: "100vh"
      }}>
        <Grid container spacing={2} style={{
          textAlign: 'center',
          padding: '10px'
        }}>

          {/* Store Events */}
          <Grid item xs={12} lg={6} md={12}>

            <div style={{
              border: "1px solid black",
              display:"flex",
              flexWrap:'wrap',
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center"
            }}>
              {/* First component lies here */}

              <Typography variant="h4" gutterBottom style={{
                padding: '10px'
              }}>
                Todos
              </Typography>

              {
                todos.length === 0 ?

                  (<Typography variant="h6" gutterBottom style={{
                    padding: '20px'
                  }}>
                    No Tasks Added
                  </Typography>) :

                  todos.map((todo, index) => (
                    <TaskComponent key={index} todo={todo} todos={todos} completed={completed} setTodos={setTodos} setCompleted={setCompleted} />
                  ))
              }
              <div style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'center', gap: '5px', padding:'10px', margin:'20px' }}>
                <TextField value={input} id="outlined-basic" autoComplete='off' label="Create Event" variant="outlined" onChange={(e) => {
                  changeInput(e.target.value)
                }} />
                <Button variant="outlined" onClick={() => {

                  changeInput('')

                  if (input === '') {
                    alert('Enter some valid task')
                  } else if(todos.includes(input)){
                    alert('Task already present')
                  } else {
                    setTodos((oldTodo) => (
                      [...oldTodo, input]
                    ))
                  }
                }}>Create Event</Button>
              </div>

            </div>


          </Grid>

          {/* Completed Events */}
          <Grid item xs={12} lg={6} md={12}>

            <div style={{
              border: "1px solid green",
              display:"flex",
              flexWrap:'wrap',
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center"
            }}>

              <Typography variant="h4" gutterBottom style={{
                padding: '20px'
              }} >
                Completed
              </Typography>

              {
                completed.length === 0 ?

                  (<Typography variant="h6" gutterBottom style={{
                    padding:'20px'
                  }}>
                    Don't Procrastinate
                  </Typography>) :

                  completed.map((completedTask, index) => (
                    <Typography variant="h6" gutterBottom key={index} style={{
                      padding: '20px'
                    }}>
                      {completedTask}
                    </Typography>
                  ))
              }

            </div>

          </Grid>

        </Grid>
      </Box>
  );
}