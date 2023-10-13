import { Checkbox, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ToDo } from "../types";
import { useStore } from "../store";

interface Props {
  todo: ToDo;
}

export const TodoItem = ({ todo }: Props) => {
  const removeTodo = useStore((state) => state.removeTodo);

  const toggleChecked = useStore((state) => state.toggleChecked);

  return (
    <div
      style={{
        backgroundColor: "rgba(217, 216, 216, 0.8)",
        marginBottom: "1rem",
        borderRadius: "0.5rem",
        padding: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={todo.checked}
          onClick={() => toggleChecked(todo.id)}
        />
        <Typography
          sx={{
            textDecoration: todo.checked ? "line-through" : "none",
            color: todo.checked ? "rgba(0, 0, 0, 0.5)" : "auto",
          }}
        >
          {todo.description}
        </Typography>
      </div>
      <button
        style={{ border: "none", background: "none" }}
        onClick={() => removeTodo(todo.id)}
      >
        <Image src="/delete.png" alt="delete-button" width={16} height={16} />
      </button>
    </div>
  );
};
