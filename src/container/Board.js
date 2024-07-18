import styled from 'styled-components';
import Lane from '../components/Lane/Lane';
import { Component } from 'react';
const BoardWrapper = styled.div`
   display:flex;
   flex-direction:row;
   margin:5%;
   justify-content:space-between;
   @media(max-width:768px){
    flex-direction:column;
   }
`;
class Board extends Component{
    constructor(){
      super();
      this.state = {
         data:[],
         loading:true,
         error:''
      }
   }
   async componentDidMount(){
    try{
      const data = await fetch('../../assets/data.json');
      const jsonData = await data.json();
      if(jsonData){
         this.setState({
            data:jsonData,
            loading:false
         })
      }
    }catch(error){
      this.setState({
         loading:true,
         error:error.message
      }) 
    }

   }
   render(){
      const lanes = [
         {id:1,title:'To Do'},
         {id:2,title:'In Progress'},
         {id:3,title:'Review'},
         {id:4,title:'Done'}
      
      ];
      const {data,loading,error} = this.state;
      return(
         <>
           <BoardWrapper>
            {lanes.map(lane => (
                  <Lane
                     laneId={lane.id}
                     loading={loading}
                     error={error}
                     title={lane.title}
                     tickets={data.filter(
                        ticket => ticket.lane === lane.id,
                     )}
                  />
            ))}
           </BoardWrapper>
         </>
        ) 
   }
}

export default Board;