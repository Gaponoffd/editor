import React from 'react';

import {MdDeleteOutline } from "react-icons/md";

export default function ImageBlock ({block, deleteBlock}) {
  return (
    <div className="editor-block" id={block.id}>
      <div className="block-navbar" >
        <div className="position-block">

        </div>
        <button className="delete-block" onClick={ () => deleteBlock(block.id) }><MdDeleteOutline /></button>
      </div>
      <div className="place" >
        <div  style={block.style}>
          <img src={block.image} alt="nophoto" />
        </div>
      </div>
    </div>
  )
}
  