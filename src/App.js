import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [list, setList] = useState("");

  const listChangeHandler = (event) => {
    setList(event.target.value);
  };

  const clickButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      list, //키와 값이 같으면 생략할수있다
    };

    setUsers([...users, newUser]);

    setList("");
  };

  return (
    <div>
      <div className='insert-style'>
        <input type='text' value={list} onChange={listChangeHandler} />
        <button onClick={clickButtonHandler}>추가하기</button>
      </div>
      <div>
        <p className='mainName'>Todo List</p>
      </div>
      <div className='allBox'>
        {users.map(function (item) {
          return (
            <div key={item.id} className='box'>
              {item.list}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
