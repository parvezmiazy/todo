import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { initialTodos } from "../data/todo";
import todoReducer from "../reducers/todoReducer";

export const TodosContext = createContext(null);
export const TodosDispatchContext = createContext(null);

export default function TodosProvider({ children }) {
  const [todos, dispatch] = useImmerReducer(todoReducer, initialTodos);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}
export function useTodosDispatch() {
  return useContext(TodosDispatchContext);
}
