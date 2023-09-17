// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachItem, deleteTodo} = props
  const {id, title} = eachItem

  const deleteItem = () => {
    deleteTodo(id)
  }

  return (
    <li className="todoItem">
      <p className="todo-head">{title}</p>
      <button className="btn" type="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
