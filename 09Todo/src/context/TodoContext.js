import { useContext, ReactDOM, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      complete: false,
    },
  ],
  addTodo(todo) {},
  updateTodo(id, todo) {},
  deleteTodo(id) {},
  complete(id) {},
});

export const Todoprovider = TodoContext.Provider;

export const useTodo = () => {
  useContext(TodoContext);
};
