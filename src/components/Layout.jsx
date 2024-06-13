import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUserInfo } from "../lib/api/auth";
import { useEffect } from "react";

const LogoutButton = styled.button`
  padding: 8px 12px;
  background-color: #fa4f74;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &hover {
    background-color: #fdacc2;
  }
`;

const NavBar = styled.nav`
  background-color: #5d4863;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: calc(100% - 2rem);
  top: 0;
  z-index: 1000;
  max-width: 1240px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  //오? styled다음에 괄호를 열고 링크를 넣어?
  color: white;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.span`
  color: white;
  margin-right: 20px;
`;

const PageContainer = styled.div`
  padding: 6rem 2rem;
`;

export default function Layout({ user, setUser }) {
  //user가 undefined라고 해서 파라미터로 내가 넣어줬는데
  //이게 맞아?
  //영상에는 만 있음
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo().then((res) => {
      console.log("useEffect내부", res);
      if (res) {
        //응답값이 무엇인가 있을 것이다
        //그렇디면?
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      }
      //이렇게 넣어주자
      //그러면 새로고침시 null이 되더라도
      // 현재 accessToken에 기반한 유저정보가 남아잇게 된다
      else {
        handleLogout();
      }
    });
  }, []);

  //위에 useEffect원래 App.jsx에 있던 건데 가져옴

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
    localStorage.clear();
  };

  return (
    <>
      <NavBar>
        <NavItems>
          <NavItem to="/">HOME</NavItem>
          <NavItem to="/profile">내 프로필</NavItem>
        </NavItems>
        <UserProfile>
          {user && (
            <>
              <UserAvatar src={user.avatar} alt="User Avatar" />
              <UserName>{user.nickname}</UserName>
              <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
            </>
          )}
        </UserProfile>
      </NavBar>
      <PageContainer>
        <Outlet />
        {/* 이렇게 밑에 아웃렛을 위치시켜야 레이아웃컴포넌트가 기본루트(App.jsx)에서
      렌더링이 되는데 기본루트 (
      <Route path="/">이 안에 home있고 detail있고</Route>) 안에 있는 children을
      그 밑에 같이 렌더링시켜줌 */}
      </PageContainer>
    </>
  );
}
