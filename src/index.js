import './styles.css'
// import { Todo } from './classes/todo.class'
// import { TodoList } from './classes/todo-list.class'
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";


export const todoList = new TodoList()

console.log(todoList)

// todoList.todos.forEach( todo => crearTodoHtml(todo) )
todoList.todos.forEach( crearTodoHtml ) //lo mismo que lo anterior, porque se le pasa lo mismo
