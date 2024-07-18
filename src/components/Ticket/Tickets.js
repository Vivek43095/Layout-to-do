import styled from "styled-components"

const TicketWrapper  = styled.div`
   margin:5%;
   background:darkGray;
   border-radius:20px;
   padding:5px;

`;

const Title = styled.h3`
   width:100%;
   text-align:center;
   padding:5px;
`;

const Body = styled.p`
   width:100%;
   text-align:center;
   
`
const Ticket = ({ticket})=>{
   return(
     <TicketWrapper>
        <Title>{ticket.title}</Title>
        <Body>{ticket.body}</Body>
     </TicketWrapper>
   )
}

export default Ticket;