import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Checkbox = styled.i`
  color: ${(props) => props.color}!important;
  font-size: 20px;
  color: #eee;
  cursor: pointer;
  margin-right: 10px;
`;
const TodolistItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 15px 20px;
  transition: 0.3s;

  input {
    outline: none;
    border: none;
    background-color: transparent;
    color: #eee;
    flex: 1;
    font-size: 22px;
    text-decoration: ${(props) => (props.completed ? "line-through" : `none`)};
  }
`;
const DeleteTodo = styled.i`
  font-size: 20px;

  cursor: pointer;
  padding: 10px 16px;
  margin-left: 14px;
  border-radius: 4px;
  margin-right: -12px;
  color: #ff1605;
  &:hover {
    background-color: #7e2601;
    transition: 0.3s;
    cursor: pointer;
  }
`;
const SaveTodo = styled.div`
  font-size: 20px;

  cursor: pointer;
  padding: 10px 16px;
  margin-left: 14px;
  border-radius: 4px;
  margin-right: -12px;
  color: #42c732;
  &:hover {
    background-color: #2b6127;
    transition: 0.3s;
    cursor: pointer;
  }
`;

function TodoItem({ todo, color, onDelete, onEdit, toggleComleted }) {
  const [newTitle, setNewTitle] = useState(todo.Title);
  const [showSave, setShowSave] = useState(false);
  useEffect(() => {
    if (newTitle != todo.Title) {
      setShowSave(true);
    } else {
      setShowSave(false);
    }
  }, [newTitle, todo]);
  return (
    <TodolistItem completed={todo.Completed}>
      <Checkbox
        color={color}
        className={todo.Completed ? "fas fa-circle-check" : "far fa-circle"}
        onClick={() => {
          toggleComleted(todo.id);
        }}
      />
      <input
        value={newTitle}
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      />
      {showSave && (
        <SaveTodo
          className="fas fa-check"
          onClick={() => {
            onEdit(todo.id, newTitle);
          }}
        />
      )}
      <DeleteTodo
        className="fas fa-trash-alt"
        onClick={() => {
          onDelete(todo.id);
        }}
      />
    </TodolistItem>
  );
}

export default TodoItem;
