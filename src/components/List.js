import { Button } from 'antd';

const List = ({todos,deleteTodo,editTodo}) => {
    return ( 
        todos!==null 
        ?todos.map((todo,index)=>{
            return(
                    <ul key={todo.id} className="listItem">
                      <li>
                          <div>
                            {index+1}. {todo.content}
                          </div>
                          <div>
                            <Button type="primary" onClick={()=>editTodo(todo)} className="button">Edit</Button>
                            <Button type="primary" onClick={()=>deleteTodo(todo.id)}  className="button">Delete</Button>
                          </div>
                      </li>
                    </ul>
          )
        })
        :(`You have no todos,add one?`)
     );
}
 
export default List;