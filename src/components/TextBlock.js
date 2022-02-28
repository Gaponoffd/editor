import React, {useContext} from 'react';
import Context from '../context';
import { MdFormatAlignLeft, MdFormatAlignJustify, MdFormatAlignRight, MdDeleteOutline } from "react-icons/md";


export default function TextBlock ({block, deleteBlock}) {

  const {editsText} = useContext(Context)
  let [text, setText] = React.useState(block.content) 

  return (
    <div className="editor-block" id={block.id}>
      <div className="block-navbar" >
        <div className="position-block">
          <button><MdFormatAlignLeft/></button>
          <button><MdFormatAlignJustify/></button>
          <button><MdFormatAlignRight/></button>
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
  