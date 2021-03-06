import { Layout } from 'antd';
import Add from './components/Add';
import React, { useState,useRef,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './components/List';

const { Header, Content } = Layout;

function App() {
  const [todos,setTodos] = useState([
    {
      content:'heyhey',
      id:uuidv4(),
    }
  ])
  const [inputVal,setInputVal] = useState('');
  const [currentId,setCurrentId] = useState(null);
  const firstRender = useRef(true);

  const addTodo = ()=>{
    setTodos([...todos,{
      content:inputVal,
      id:uuidv4()
    }])
    setInputVal('');
    if(currentId!==null){
      updateTodo();
    }
  }


  const deleteTodo = (id)=>{
    const filteredTodo = todos.filter(todo=>todo.id!==id);
    setTodos(filteredTodo);
  }

  const editTodo = (todos)=>{
    setInputVal(todos.content);
    setCurrentId(todos.id);
  }

  const updateTodo = ()=>{
    setTodos(todos.map(todo=>todo.id===currentId 
      ? {content:inputVal,id:uuidv4()}
      :todo
      ))
    setCurrentId(null);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(currentId===null){
      addTodo();
    }else{
      updateTodo();
    }
  }

  useEffect(()=>{
    if(firstRender.current){
      firstRender.current = false;
    }else{
      localStorage.setItem('todos',JSON.stringify([...todos]))
    }
  },[todos])

  useEffect(()=>{
    if(localStorage.getItem('todos')!==null){
      const getTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(getTodos);
    }
  },[])

  return (
    <div className="App">
       <Layout>
        <Header className="header">Todo</Header>
        <Content className="content">
             <Add
               inputVal={inputVal}
               setInputVal={setInputVal}
               addTodo={addTodo}
               currentId={currentId}
               handleSubmit={handleSubmit}
             />
             <List
               todos={todos}
               deleteTodo={deleteTodo}
               editTodo={editTodo}
               className="list"
             />
        </Content>
       </Layout>
    </div>
  );
}

export default App;
