export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};
export const searchTodo = (text) => {
  return {
    type: "filter/searchTodo",
    payload: text,
  };
};
export const filterTodo = (status) => {
  return {
    type: "filter/filterTodo",
    payload: status,
  };
};
export const priorityTodo = (priority) => {
  return {
    type: "filter/priorityTodo",
    payload: priority,
  };
};
//action creators => function
