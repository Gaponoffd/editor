import React, {useState, useContext} from 'react';
import Context from '../context';
import { MdFormatAlignLeft, MdFormatAlignJustify, MdFormatAlignRight, MdDeleteOutline, MdColorLens, MdBlurOn } from "react-icons/md";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function TitleBlock ({block, deleteBlock}) {
  const {editsText, editStyle} = useContext(Context)
  const [text, setText] = useState(block.content);
  const [styles, setStyles] = useState(block.style);
  const [toggler, setToggler] = useState(false);
  const [color, setColor] = useColor("hex", "#894040");

  function textDirection(direction) {
    let newObj = {}
    Object.assign(newObj, styles)
    newObj.textAlign = direction;
    setStyles(newObj);
    editStyle(block.id, newObj)
  }

  function textColor(color) {
    let newObj = {}
    Object.assign(newObj, styles)
    newObj.color = color.hex;
    setColor(color);
    setStyles(newObj);
    editStyle(block.id, newObj);
  }

  return (
    <div className="editor-block" id={block.id}>
      {toggler ?  
        <div className='colorpicker'>
          <ColorPicker 
            width={400}
            height={200}
            color={color}
            hideHSV
            dark
            onChange={textColor}
            />
        </div>
        : ""
      }
      <div className="block-navbar" >
        <div className="position-block">
          <button onClick={()=> textDirection('left')}><MdFormatAlignLeft/></button>
          <button onClick={()=> textDirection('center')}><MdFormatAlignJustify/></button>
          <button onClick={()=> textDirection('right')}><MdFormatAlignRight/></button>
          <button onClick={()=> setToggler(!toggler)}><MdColorLens/></button>
        </div>
        <div className="position-block">
          <button className="delete-block" onClick={ () => deleteBlock(block.id) }><MdDeleteOutline /></button>
          <button><MdBlurOn/></button>
        </div>
      </div>
      <div className="place" >
        <textarea 
          style={styles} 
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
  