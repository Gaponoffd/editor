import React from 'react';

export default function TitleBlock (props) {
  return (
    <textarea style={props.block.style}>{props.block.content}</textarea>
  )
}
  