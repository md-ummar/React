import { useContext, ReactDOM, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo(todo) {},
  updateTodo(id, todo) {},
  deleteTodo(id) {},
  togglecomplete(id) {},
});

export const Todoprovider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
