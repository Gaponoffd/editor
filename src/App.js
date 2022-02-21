
import './style/main'

import React from 'react';
import Navbar from './components/Navbar'
import EditorBlock from './components/EditorBlock'

function App() {

  let [blocks, setBlocks] = React.useState([])

  function addBlock(type) {

    let typeBlock;

    switch (type) {
      case 'title':
        typeBlock = {
          id: new Date().getMilliseconds(),
          name: 'title',
          style: {fontSize: '24px', minHeight:'50px', color:'#000', width:"100%", textAlign: "center", fontWeight: 700},
          content: "Заголовок"
        }
        break;
      case 'text':
        typeBlock = {
          id: new Date().getMilliseconds(),
          name: 'text',
          style: {fontSize: '16px', minHeight:'350px', color:'#000', width:"100%", textAlign: "left"},
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu`
        }
        break;
      case 'image':
        typeBlock = {
          id: new Date().getMilliseconds(),
          name: "image",
          style: {position: 'relative', minHeight: '200px', 'width': '100%', display: "flex", alignItems: "center", justifyContent: "center"},
          image: './images/no-photo.png'
        }
        break;
      case 'background':
        typeBlock = {
          id: new Date().getMilliseconds(),
          name: "background",
          style: {
            position: 'relative',
            minHeight: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url('./images/lorem.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: '50px 15px',
            fontSize: '24px',
            fontWeight: 700,
            color: '#fff',
          },
          content: 'Заголовок'
        }
        break;
      default:
        typeBlock = {}
    }


    setBlocks([
      ...blocks,
      typeBlock
    ])
  }

  function deleteBlock(id) {
    setBlocks(blocks.filter(block => block.id !== id))
  }

  function editsText(id, content) {
    setBlocks(
      // eslint-disable-next-line array-callback-return
      blocks.map(block => {
        console.log(block.id);
        if(block.id === id){
          
          block.content = content;

          return block
        }
      })
      
    )
  }

  return (
    <div className='wrapper'>

      <h1>Редактор</h1>

      {blocks.map(block => {
        return (
          <EditorBlock 
            key={block.id} 
            block={block} 
            deleteBlock={deleteBlock} 
            editsText={editsText} 
          />
        )
      })}

      <Navbar addBlock={addBlock} />

      <button className="button-save" onClick={()=>{console.log(blocks)}}>Сохранить</button>
      
    </div>
  );
}

export default App;
