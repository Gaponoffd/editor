import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { deleteBlock, editText, editStyle } from '../core/blockSlice'
import { MdFormatAlignLeft, MdFormatAlignJustify, MdFormatAlignRight, MdDeleteOutline, MdColorLens, MdBlurOn } from "react-icons/md";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function TitleBlock ({block}) {
  const [text, setText] = useState(block.content);
  const [toggler, setToggler] = useState(false);
  const [color, setColor] = useColor("hex", "#894040");
  const dispatch = useDispatch()

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
            onChange={color => {
                setColor(color);
                dispatch(editStyle([block.id, "color", color.hex]))
              }
            }
          />
        </div>
        : ""
      }
      <div className="block-navbar" >
        <div className="position-block">
          <button onClick={() => {dispatch(editStyle([block.id, "textAlign", 'left']))}}><MdFormatAlignLeft/></button>
          <button onClick={() => {dispatch(editStyle([block.id, "textAlign", 'center']))}}><MdFormatAlignJustify/></button>
          <button onClick={() => {dispatch(editStyle([block.id, "textAlign", 'right']))}}><MdFormatAlignRight/></button>
          <button onClick={()=> setToggler(!toggler)}><MdColorLens/></button>
        </div>
        <div className="position-block">
          <button className="delete-block" onClick={()=> dispatch(deleteBlock(block.id))}><MdDeleteOutline /></button>
          <button><MdBlurOn/></button>
        </div>
      </div>
      <div className="place" >
        <textarea 
          style={block.style} 
          value={text} 
          onChange={event =>{
            setText(event.target.value);
            dispatch(editText([block.id, text]))
          }} 
        ></textarea>
      </div>
    </div>
  )
}
  