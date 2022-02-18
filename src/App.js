
import './style/main'

import React from 'react';
import Navbar from './components/Navbar'
import EditorBlock from './components/EditorBlock'

function App() {

  let [blocks, setBlocks] = React.useState([])

  function addBlock() {
    setBlocks([
      ...blocks,
      {
        id: new Date(),
        name: 'title',
        style: {fontSize: '16px', minHeight:'350px', color:'#000', width:"100%", textAlign: "left"},
        content: "Lorem ipsum dolor "
      }
    ])
  }

  return (
    <div className='wrapper'>

      <h1>Редактор</h1>

      {blocks.map(block => {
        return <EditorBlock key={block.id} block={block} />
      })}

      <Navbar addBlock={addBlock} />

      <button className="button-save">Сохранить</button>
      
    </div>
  );
}

export default App;
