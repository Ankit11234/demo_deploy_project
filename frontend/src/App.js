import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Addtask from './Components/AddTask';
import Auth from './Components/Auth';
import TaskDetail from './Components/TaskDetail';
import Header from './Components/Header';
import UserTasks from './Components/UserTasks';
import { authActions } from './Store';
import Tasks from './Components/Tasks';


function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.isLoggedIn);
  console.log(state);
  useEffect(()=>{

    if(localStorage.getItem("userId")){
      dispatch(authActions.login());
    }
  },[dispatch])
  return (
    <>
    <header>
     <Header/>
    </header>
    <main>
      <Routes>
      {!state ?<Route path='/auth' element={<Auth/>}/>:
        <>
          <Route path='/tasks' element={<Tasks/>}/>
          <Route path='/mytasks' element={<UserTasks/>}/>
          <Route path='/mytasks/:id' element={<TaskDetail/>}/>
          <Route path='/tasks/add' element={<Addtask/>}/> 
        </>
      }
     
      </Routes>
    </main>
    </>
  );
}

export default App;
