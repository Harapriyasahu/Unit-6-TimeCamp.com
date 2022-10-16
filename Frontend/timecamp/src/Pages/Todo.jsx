import React from "react";
import style from "../Styled/tag.module.css";
import Todobox from "./Todobox";
import { useState } from "react";
export default function Todo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = task;
    setData([...data, newData]);
    setTask("");
  };

  return (
    <div>
     
      <div className="todo">
        <form onSubmit={handleSubmit} style={{display:"flex"}}>
          <input
            className={style.inputbox}
            placeholder="New list name"
            type="text"
            name=""
            id=""
            value={task}
            onChange={handleChange}
          />
          <div>
            <button type="submit" className={style.addbtn}>
              Add
            </button>
          </div>
        </form>

        {data.map((item, index) => {
          return (
            <div>
              <Todobox key={index} id={index} newTask={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}