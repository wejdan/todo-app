import React from "react";
import styled from "styled-components";
const HeaderWrapper = styled.div`
  background-color: #1d1e27;
  display: flex;
  align-items: center;
  height: 70px;

  padding: 0 20px;
  color: #ededef;
  position: sticky;
  top: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const HeaderItem = styled.div`
  padding: 10px 16px;

  border-radius: 4px;
  span {
    margin-left: 10px;
    font-weight: 500;
  }
  &:hover {
    background-color: #18181f;
    transition: 0.3s;
    cursor: pointer;
  }
`;
const Placeholder = styled.div`
  flex: 1;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
    border-radius: 50%;
  }
`;
function Header({ setSidebarToggle }) {
  return (
    <HeaderWrapper>
      <HeaderItem>
        <i
          className="fas fa-bars"
          onClick={() => {
            setSidebarToggle((prev) => !prev);
          }}
        />
      </HeaderItem>
      <HeaderItem>
        <i className="fas fa-border-all" />
        <span>Dashboard</span>
      </HeaderItem>
      <HeaderItem>
        <i className="fas fa-images" />
        <span>Collections</span>
      </HeaderItem>
      <Placeholder />
      <HeaderItem>
        <Profile>
          <img src="https://i.pinimg.com/originals/6b/fd/41/6bfd41330325c4ad1f1e0bb6d4291db4.jpg" />
        </Profile>
      </HeaderItem>
    </HeaderWrapper>
  );
}

export default Header;
