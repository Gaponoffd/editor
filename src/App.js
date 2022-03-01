
import './style/main'

import React from 'react';
import Context from './context';

import Navbar from './components/Navbar'
import TitleBlock from "./components/TitleBlock";
import TextBlock from "./components/TextBlock";
import ImageBlock from "./components/ImageBlock";
import BackgroundBlock from "./components/BackgroundBlock";

function App() {

  let [blocks, setBlocks] = React.useState([])

  function addBlock(typeBlock) {
    setBlocks([...blocks, typeBlock])
  }

  function deleteBlock(id) {
    setBlocks(blocks.filter(block => block.id !== id))
  }

  function editsText(id, content) {
    setBlocks(
      blocks.map(block => {
        if(block.id === id){
          block.content = content;
        }
        return block
      })
    )
  }

  function editStyle(id, style) {
    setBlocks(
      blocks.map(block => {
        if(block.id === id){
          block.style = style;
        }
        return block
      })
    )
  }

  return (
    <Context.Provider value={{editsText, editStyle}}>
      <div className='wrapper'>
        <h1>Редактор</h1>
        {blocks.map(block => {
          if(block.name === 'background') {
            return <BackgroundBlock key={block.id} block={block} deleteBlock={deleteBlock} />
          }
          if(block.name === 'image') {
            return <ImageBlock key={block.id} block={block} deleteBlock={deleteBlock} />
          }
          if(block.name === 'title') {
            return <TitleBlock key={block.id} block={block} deleteBlock={deleteBlock} />
          }
          if(block.name === 'text') {
            return <TextBlock key={block.id} block={block} deleteBlock={deleteBlock} />
          }
          return false
        })}
        <Navbar addBlock={addBlock} />
        <button className="button-save" onClick={()=>{console.log(blocks)}}>Сохранить</button>
      </div>
    </Context.Provider>
  );

}

export default App;
