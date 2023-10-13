import { create } from "zustand";
import { ToDo } from "../types";
import { devtools, persist } from "zustand/middleware";

import { v4 as uuidv4 } from "uuid";

interface ToDoState {
  toDos: ToDo[];
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  toggleChecked: (id: string) => void;
}

export const useStore = create<ToDoState>()(
  devtools(
    persist(
      (set) => ({
        toDos: [],
        addTodo: (description: string) =>
          set((state) => ({
            toDos: [
              ...state.toDos,
              { id: uuidv4(), description, checked: false },
            ],
          })),
        removeTodo: (id: string) =>
          set((state) => ({
            toDos: state.toDos.filter((todo) => todo.id !== id),
          })),
        toggleChecked: (id: string) =>
          set((state) => ({
            toDos: state.toDos.map((toDo: ToDo) =>
              toDo.id === id ? { ...toDo, checked: !toDo.checked } : toDo
            ),
          })),
      }),
      {
        name: "toDoStore",
      }
    )
  )
);
