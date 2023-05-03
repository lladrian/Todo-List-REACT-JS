import { useState } from 'react';

// library imports
import { PlusIcon } from '@heroicons/react/24/solid'


import styles from './CustomForm.module.css';

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <div>

    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label
          htmlFor="task"
          className="label"
        >Enter Task</label>
      </div>
      <button
        className="btn"
        aria-label="Add Task"
        type="submit"
        >
        <PlusIcon />
      </button>    
    </form>  
    <div className={styles.container}>
        <ul className={styles.unlist}>
          <li>LIST</li>
          <li>FINISHED</li>
          <li>UNFINISHED</li>
        </ul>
      </div>
    </div> 
  )
}
export default CustomForm