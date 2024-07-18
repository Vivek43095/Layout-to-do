import styled from "styled-components";

const HeaderWrapper = styled.div`
   background-color:blue;   
   display:flex;
   flex-direction:column;
   text-align:center;
   margin:10px 20px;  
`;

const Title = styled.h1`
  padding:20px;
  color:white;
`

const Header = ()=>{
    return(
        <HeaderWrapper>
            <Title>To Do Management System</Title>
        </HeaderWrapper>
    ) 
}
export default Header;