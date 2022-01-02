import { Layout, Menu, Breadcrumb } from 'antd';
import Tasks from "./Tasks";
import InputForm from "./Input";
import { Header } from './Header';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { Store } from '../Store';
export const Tracker = (props) => {
    const {Content} = Layout; 
    const [tasks, setTasks] = useState([
        {
          id:1,
          taskName:'task1',
          endDate:"",
          done:false
        },
        {
          id:2,
          taskName:'task2',
          endDate:"",
          done:true
        }
      ]);
      const addTask = (task) => {
          console.log(task)
        setTasks([...tasks, task])
        console.log(tasks)
      }
      const deleteTask = (id) => {
          setTasks(tasks.filter(task => task.id !== id))
      } 
      const doneTask = (id) => {
          setTasks(tasks.map(task => 
              task.id === id ? {...task, done:!task.done} : task
              
          ))
      }  

    return <Provider store={Store}>
    <Layout>
        {/* <Content> */}
            <div style={{width:"40%", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", border:"1px solid black", padding:"2rem"}}>
                <Header />
                < InputForm addTask={addTask}/>
                <Tasks tasks={tasks} deleteTask={deleteTask} doneTask={doneTask}/>
            </div>
        {/* </Content> */}
    </Layout>
    </Provider> 
}