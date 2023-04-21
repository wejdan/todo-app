import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  background-color: #20212d;
  min-height: calc(100vh - 70px);
  width: ${(props) => (props.sidebarToggle ? "300px" : `70px`)};
  transition: 0.3s;
  padding-left: 35px;
  overflow: hidden;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 50px 0;
`;
const SidebarItem = styled.div`
  display: flex;

  align-items: center;
  margin: 4px -16px;
  padding: 10px 16px;
  border-radius: 4px;
  width: calc(100% - 32px);
  &:hover {
    background-color: #18181f;
    transition: 0.3s;
    cursor: pointer;
  }
`;
const SidebarItemIcon = styled.div`
  background-color: ${(props) => props.color};
  min-width: 30px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 4px;
`;
const SidebarItemText = styled.span`
  white-space: nowrap;
  margin-left: 10px;
  font-weight: 500;
  font-size: 18px;
  width: ${(props) => (props.sidebarToggle ? "auto" : `0px`)};
  overflow: hidden;
`;
const Categorylist = styled.div`
  margin-top: -16px;
`;
function Sidebar({ sidebarToggle, todolist }) {
  return (
    <Wrapper sidebarToggle={sidebarToggle}>
      <Title>{sidebarToggle ? "Collections" : "C"}</Title>
      <Categorylist>
        {todolist.map((item, i) => {
          return (
            <SidebarItem key={i}>
              <SidebarItemIcon color={item.color}>
                <i className={item.icon} />
              </SidebarItemIcon>
              {sidebarToggle && (
                <SidebarItemText sidebarToggle={sidebarToggle}>
                  {item.name}
                </SidebarItemText>
              )}
            </SidebarItem>
          );
        })}
      </Categorylist>
    </Wrapper>
  );
}

export default Sidebar;
