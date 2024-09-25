import styled from "styled-components";
const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <h3>BLS</h3>
      </LogoWrapper>
      <MenuWrapper>
        <Square></Square>
        <p>Menu</p>
      </MenuWrapper>
    </HeaderContainer>
  );
};
export default Header;
const HeaderContainer = styled.header`
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;
const LogoWrapper = styled.div`
  h3 {
    font-size: var(--font-medium);
  }
`;
const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-size: var(--font-medium);
  }
`;
const Square = styled.div`
  background-color: white;
  width: 30px;
  height: 30px;
`;
