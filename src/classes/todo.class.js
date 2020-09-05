export class Todo {

  static fromJson({ id, tarea, completado, creado }) { //convertir en objetos de nuevo
    const tempTodo = new Todo( tarea )

    tempTodo.id = id
    tempTodo.completado = completado
    tempTodo.creado = creado
    
    return tempTodo;
  }


  constructor( tarea ) {
    this.tarea = tarea

    this.id         = new Date().getTime() //12865564
    this.completado = false
    this.creado     = new Date();
  }
}