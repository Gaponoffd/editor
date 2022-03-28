
import './style/main'
import React from 'react';

import Navbar from './components/Navbar'
import TitleBlock from "./components/TitleBlock";
import TextBlock from "./components/TextBlock";
import ImageBlock from "./components/ImageBlock";
import BackgroundBlock from "./components/BackgroundBlock";

import { useSelector, useDispatch } from 'react-redux'

function App() {

  const state = useSelector(state => state.block)

  return (
    <div className='wrapper'>
      <h1>Редактор</h1>

      {state.block.map(block => {
        if(block.name === 'background') {
          return <BackgroundBlock key={block.id} block={block} />
        }
        if(block.name === 'image') {
          return <ImageBlock key={block.id} block={block} />
        }
        if(block.name === 'title') { 
          return <TitleBlock key={block.id} block={block} />
        }
        if(block.name === 'text') {
          return <TextBlock key={block.id} block={block} />
        }
        return false
      })}

      <Navbar />
      <button className="button-save" onClick={()=>{console.log(state.block)}}>Сохранить</button>
    </div>
  );
}

export default App;
