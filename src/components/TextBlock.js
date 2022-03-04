import React, {useContext} from 'react';
import Context from '../context';
import { MdFormatAlignLeft, MdFormatAlignJustify, MdFormatAlignRight, MdDeleteOutline } from "react-icons/md";


export default function TextBlock ({block, deleteBlock}) {

  const {editsText, editStyle} = useContext(Context)
  let [text, setText] = React.useState(block.content)

  let [styles, setStyles] = React.useState(block.style)


  function textDirection(direction) {
    let newObj = {}
    Object.assign(newObj, styles)
    newObj.textAlign = direction;
    setStyles(newObj);
    editStyle(block.id, newObj)
  }

  return (
    <div className="editor-block" id={block.id}>
      <div className="block-navbar" >
        <div className="position-block">
          <button onClick={()=> textDirection('left')}><MdFormatAlignLeft/></button>
          <button onClick={()=> textDirection('center')}><MdFormatAlignJustify/></button>
          <button onClick={()=> textDirection('right')}><MdFormatAlignRight/></button>
        </div>
        <button className="delete-block" onClick={ () => deleteBlock(block.id) }><MdDeleteOutline /></button>
      </div>
      <div className="place" >
        <textarea 
          style={block.style} 
          value={text} 
          onChange={event =>{
            setText(event.target.value);
            editsText(block.id, event.target.value)
          }} 
        ></textarea>
      </div>
    </div>
  )
}
  