import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import { readTodoList } from "./utils";
const Wrapper = styled.div`
  background-color: #18181f;
  min-height: 100vh;
  min-width: 100vw;
  color: #eee;
`;
const Title = styled.div`
  margin: 50px 0;
  font-size: 30px;
  font-weight: 700;
`;
const Main = styled.div`
  display: flex;
`;
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;
`;
const TodoContent = styled.div`
  max-width: 700px;
  width: 100%;
`;
const Greeting = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 800;
`;
function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  const todolist = [
    { name: "Personal", color: "#fd76a1", icon: "fas fa-user" },
    { name: "Work", color: "#70c4be", icon: "fas fa-briefcase" },
    { name: "Profit with React", color: "#ab6ddf", icon: "fas fa-file-code" },
  ];

  return (
    <Wrapper>
      <Header setSidebarToggle={setSidebarToggle} />
      <Main>
        <Sidebar sidebarToggle={sidebarToggle} todolist={todolist} />
        <MainContent
          style={{ width: `calc(100vw - ${sidebarToggle ? "300px" : "70px"})` }}
        >
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good moring, Davied</Greeting>
            {todolist.map((list, i) => {
              return <TodoList key={i} list={list} />;
            })}
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default App;
