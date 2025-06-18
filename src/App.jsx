import { useState } from 'react';
import Header from './comp/Header';
import List from './comp/TodoList';
import './App.css';

function App() {
  const [texts, setTexts] = useState("");
  const [state, setState] = useState([
    { text: "Do the laundry",completed:false },
    { text: "Iron the clothes",completed:false },
    { text: "Go for a walk",completed:false }
  ]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function add(text) {
    if (text.trim() === "") return;
    const newTodos = [...state, { text: text, completed:false }];
    setState(newTodos);
    setTexts(""); // Clear input after adding
  }

  function remove(text) {
    const filteredTodos = state.filter(todo => todo.text !== text);
    setState(filteredTodos);
  }
  
  function toggle(index){
    let newstate=[...state];
    newstate[index].completed=!newstate[index].completed;
    setState(newstate);
  }
  function edit(index) {
    setEditIndex(index);
    setEditText(state[index].text);
  }
  function saveEdit() {
    const newState = [...state];
    newState[editIndex].text = editText;
    setState(newState);
    setEditIndex(null);
    setEditText("");
  }
  return (
    <>
      <Header />
      <div className="form">
        <input
          value={texts}
          onChange={(e) => setTexts(e.target.value)}
          placeholder="What's on your mind?"
          required
        /><br />
        <button onClick={() => add(texts)}>Add</button>
      </div>
      {editIndex !== null && (
      <div>
      <input
       value={editText}
       onChange={(e) => setEditText(e.target.value)}
      />
      <button onClick={saveEdit}>Save</button>
      </div>
      )}
      <List todos={state} remove={remove} toggle={toggle} edit={edit} />
    </>
  );
}

export default App;
