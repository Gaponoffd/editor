import React from 'react';

import './style/main'
import Navbar from './components/Navbar'
import EditorBlock from './components/EditorBlock'

function App() {

  let [blocks, setBlocks] = React.useState([
    //{"id": 0, "name":"text", "style":{"font-size":"16px","min-height":"350px","color":"#000","width":"100%","text-align":"left"},"content":"Lorem ipsum dolor "},
    //{"id": 0, "name":"text2", "style":{"font-size":"16px","min-height":"350px","color":"#000","width":"100%","text-align":"left"},"content":"Lorem ipsum dolor "}
  ])

  return (
    <div className='wrapper'>

      <h1>Редактор</h1>

      <Navbar />

      {blocks.map(block => {
        return <EditorBlock block={block} />
      })}

      <button className="button-save">Сохранить</button>
      
    </div>
  );
}

export default App;
