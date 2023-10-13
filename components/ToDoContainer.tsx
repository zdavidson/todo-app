import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { TodoItem } from "./TodoItem";
import { useStore } from "../store";

export const ToDoContainer = () => {
  const toDos = useStore((state) => state.toDos);
  const addToDos = useStore((state) => state.addTodo);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addToDos(event.target[0].value);
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        maxHeight: "50vh",
        marginTop: "10vh",
        padding: "2rem",
        borderRadius: "1rem",
        minWidth: "40vw",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "3rem", fontWeight: 500, marginBottom: "1rem" }}
      >
        ToDos
      </Typography>

      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Add your todo..."
          variant="outlined"
          sx={{ marginRight: "1rem" }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ background: "linear-gradient(0.125turn, #e66465, #9198e5)" }}
        >
          Submit
        </Button>
      </form>
      {toDos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};
