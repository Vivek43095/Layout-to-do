import styled from "styled-components"
import Ticket from "../Ticket/Tickets";
const LaneWrapper = styled.div`
   background-color:lightGrey;
   width:20vw;
   min-height:50vh;
   display:flex;
   flex-direction:column;
   border-radius:10px;
   @media(max-width:768px){
    margin-bottom:20px;
    width:90vw;
   }
`;
const AlertWrapper = styled.div`
  color:red;
  width:100%;
  padding:0;
`

const Title = styled.h2`
   color:white;
   text-align:center;
   border-bottom:1px solid gray;
   padding-bottom:10px;
`
const Lane = ({loading,error,title,tickets}) =>{
   return(
     <LaneWrapper>
        <Title>{title}</Title>
        {
         (loading || error) && <AlertWrapper>{loading ? 'Loading ...' : error}</AlertWrapper>
        
        }{
         tickets.map(ticket=>
         <Ticket ticket={ticket}/>)
        }
        
     </LaneWrapper>
   )
}

export default Lane;