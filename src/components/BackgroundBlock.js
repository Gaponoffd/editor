import React from 'react';

export default function BackgroundBlock (props) {
  return (
    <div style={props.block.style}>
      <textarea>{props.block.content}</textarea>
    </div>
  )
}
  