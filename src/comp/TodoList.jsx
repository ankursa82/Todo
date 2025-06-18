
import '../App.css';
import TodoItem from './TodoItem';
export default function List({todos, edit, remove, toggle}){
    return(
        <ul>
            {todos.map((todo,i)=>{
                return(
                <li key={i}>
                 <TodoItem  completed={todo.completed} text={todo.text} remove={remove} toggle={()=>toggle(i)} edit={()=>edit(i)}/>
                </li>
                )
            })}
        </ul>
    )
}