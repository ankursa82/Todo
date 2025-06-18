import '../App.css';
export default function TodoItem({text,completed,remove,toggle, edit}){
    return (
        <>
          <span>{text}</span> , <span>{completed?"Complete":"Incomplete"}</span>
          <button onClick={()=>remove(text)}>X</button>
          <button onClick={toggle}>Toggle</button>
          <button onClick={edit}>Edit</button>
        </>
      );
}