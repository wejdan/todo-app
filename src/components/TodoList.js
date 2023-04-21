import {
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { database } from "../firebase";
import {
  AddTask,
  checkTask,
  deleteTask,
  readTodoList,
  updateTask,
} from "../databaseUtils";
import Loading from "./Loading";
import TodoItem from "./TodoItem";
const Wrapper = styled.div`
  background-color: #20212d;

  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
`;
const TodoCategoryHeader = styled.div`
  padding: 15px 20px;
  display: flex;
  background-color: #272833;
  align-items: center;
  height: 50px;
`;
const CategoryIcon = styled.div`
  background-color: ${(props) => props.color};
  height: 30px;
  width: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const Title = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: 800;
`;
const TodoInput = styled.input`
  height: 30px;
  font-size: 18px;
  background-color: #20212d;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 4px 10px;
  margin-right: 4px;
`;
const TodolistItems = styled.div``;
const AddTodo = styled.i`
  padding: 10px 16px;
  color: #eee;

  border-radius: 4px;
  margin-right: -12px;

  &:hover {
    background-color: #20212d;
    transition: 0.3s;
    cursor: pointer;
  }
`;

function TodoList({ list }) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const collectionRef = collection(database, list.name);
    const q = query(collectionRef, orderBy("createdAt", "desc"));
    const unsubscriber = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setTodos(data);
    });
    return unsubscriber;
  }, []);
  const deleteItem = (id) => {
    deleteTask(list.name, id);
  };
  const toggleComleted = (id) => {
    const item = todos.find((item) => item.id == id);
    checkTask(list.name, id, !item.Completed);
  };
  const editItem = (id, title) => {
    checkTask(list.name, id, title);
  };
  return (
    <Wrapper>
      <TodoCategoryHeader>
        <CategoryIcon color={list.color}>
          <i className={list.icon} />
        </CategoryIcon>
        <Title>{list.name}</Title>
        <TodoInput value={todo} onChange={(e) => setTodo(e.target.value)} />
        <AddTodo
          className="fas fa-plus"
          onClick={async () => {
            if (todo.length > 0) {
              const newTodo = {
                Title: todo,
                Completed: false,
                createdAt: serverTimestamp(),
              };
              AddTask(list.name, newTodo);
              //   setTodos([{ id: newTask.id, ...newTask.fields }, ...todos]);
              setTodo("");
            }
          }}
        />
      </TodoCategoryHeader>
      {todos.map((item, i) => {
        return (
          <TodoItem
            todo={item}
            key={item.id}
            onDelete={deleteItem}
            onEdit={editItem}
            toggleComleted={toggleComleted}
            color={list.color}
          />
        );
      })}
      {isLoading && <Loading />}
    </Wrapper>
  );
}

export default TodoList;
