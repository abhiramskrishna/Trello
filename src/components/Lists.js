import React, { useState, useEffect } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import styled from 'styled-components';
import Cards from './Cards';
import ListInput from './Inputs/InputList';
import CardInput from './Inputs/InputCard';

export default () => {



  const [lists, setLists] = useState([]);
  useEffect(() => {
    let json = localStorage.getItem('lists');
    setLists(json === null ? [] : JSON.parse(json));
    if (json === null)
      localStorage.setItem('lists', JSON.stringify([]));
  }, [])
  const updateList = (data) => {
    setLists(data);
    saveList(data);
  }
  const saveList = (data) => localStorage.setItem('lists', JSON.stringify(data));
  
  function onDragEnd(result) {
    console.log(result)
    if (!result.destination) return;
    if (result.destination.droppableId === result.source.droppableId &&
      result.destination.index === result.source.index) return;
   
    const source = {
      category: result.source.droppableId.split("-")[1],
      index: result.source.index
    }
    const destination = {
      category: result.destination.droppableId.split("-")[1],
      index: result.destination.index
    }
    let newList = JSON.parse(localStorage.getItem('lists'));
    let sCards = newList[source.category].cards;
    let dCards = newList[destination.category].cards;
    let card = sCards[source.index];
    sCards.splice(source.index, 1);
    dCards.splice(destination.index, 0, card);
    updateList(newList);
  }
  return (
  <List>
    <ListInput updateList={updateList} />
    <DragDropContext onDragEnd={onDragEnd}>
    
      <div 
            className="categories">
        {
          lists.map((category, index) => {
            return (
              <div key={index} className="category">
                <div className="title">

                  <div className="text">{category.title}</div>
                </div>
                <CardInput category={index} updateList={updateList} />
                <Cards index={index} data={category.cards} updateList={updateList} />
              </div>
            )
          })
        }
      </div>
    </DragDropContext>
  </List>);
}

const List = styled.div`
  margin-top: 5px;
  .categories {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    .category {
      flex-basis: 24%;
      background: rgba(19, 19, 19, 0.2);
      min-height: 80px;
      box-sizing: content-box;
      margin: 5px;
      padding-bottom: 5px;
      margin-bottom: 10px;
      @media (max-width: 1000px) {
        flex-basis: 100%;
        min-height: 120px;
      }
      .title {
        position: relative;
        font-weight: bold;
        font-size: 18px;
        background: rgba(19, 19, 19, 0.3);
        padding: 10px 5px;
        display: flex;
        padding-right: 25px;
        word-break: break-all;
        .icon {
          position: absolute;
          right: 10px;
          top: 10px;
          color: #fff;
        }
        .text { margin-left: 4px; }
      }
    }
  }
`;