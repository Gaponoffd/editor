import React from 'react';

export default function ImageBlock (props) {
  return (
    <div  style={props.block.style}>
      <img src={props.block.image} alt="nophoto" />
    </div>
  )
}
  