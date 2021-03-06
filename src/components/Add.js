import { Input,Button} from 'antd';
const Add = (props) => {
    const {inputVal,setInputVal,addTodo,currentId,handleSubmit} = props;
    return ( 
        <>
           <form onSubmit={(e)=>handleSubmit(e)} className="form">
            <Input 
              placeholder="please enter..." 
              required
              autoFocus
              value={inputVal}
              onChange={e=>setInputVal(e.target.value)}
              className="input"
            />
            <Button type="submit" onClick={()=>addTodo()} className="submitButton">{currentId==null ? 'Add' : 'Update'}</Button>
           </form>
        </>
     );
}
 
export default Add;