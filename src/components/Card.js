import React from 'react';
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";


export default (props) => {
  
  function isEven(n) {
    return n % 2 == 0;
  } 
    
  
  return (
    <Draggable draggableId={`item-${props.category}-${props.index}`} index={props.index}>
      {(provided, snapshot) => (
        
        <Container

              ref={provided.innerRef} 
              {...provided.draggableProps} 
              {...provided.dragHandleProps}
              isDragging={snapshot.isDragging}

               border={isEven(props.index)}


              >
              {props.message}
               <i onClick={props.updateCard} />
          
        </Container>
        
      )}
    </Draggable>
  )
}

const Container = styled.div`
  padding: 15px 10px;
  margin: 5px 10px;
  border: solid 5px;
  border-color: green;
  background: #fff;
  border-radius: 3px;
  color: #444;
  cursor: pointer;
  padding-right: 20px;
  position: relative;
  .icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  border-color:${props => (props.border ? 'red' : 'blue')};
  background-color:${props => (props.isDragging ? 'lightgreen' : 'white')};
`;