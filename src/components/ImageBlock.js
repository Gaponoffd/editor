import React, { useState } from 'react';

import { useDispatch } from 'react-redux'
import { deleteBlock, editText, editStyle } from '../core/blockSlice'
import { MdDeleteOutline, MdBlurOn } from "react-icons/md";

export default function ImageBlock ({block}) {
  const dispatch = useDispatch()

  return (
    <div className="editor-block" id={block.id}>
      <div className="block-navbar" >
        <div className="position-block">

        </div>
        <div className="position-block">
          <button className="delete-block" onClick={()=> dispatch(deleteBlock(block.id))}><MdDeleteOutline /></button>
          <button><MdBlurOn/></button>
        </div>
      </div>
      <div className="place" >
        <div  style={block.style}>
          <img src={block.image} alt="nophoto" />
        </div>
      </div>
    </div>
  )
}
  