import Header from '../components/Header/Header';
import Board from './Board';
import styled, { createGlobalStyle } from 'styled-components';

const AppWrapper = styled.div`
  text-align:center;
`;
const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    font-family:Tahoma
  }
`
function App() {
  return (
    <>
    <GlobalStyle/>
    <AppWrapper>
      <Header/>
      <Board/>
    </AppWrapper>
    </>
  );
}

export default App;
