
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addBlock} from '../core/blockSlice'
import { initialBlock } from "../initialBlock";
import { MdPhotoSizeSelectActual, MdPhotoCamera, MdOutlineTitle, MdOutlineTextFields } from "react-icons/md";

function Navbar() {
  const dispatch = useDispatch()
  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={()=> dispatch(addBlock(initialBlock.background))}><MdPhotoSizeSelectActual /></button></li>
        <li><button onClick={()=> dispatch(addBlock(initialBlock.image))}><MdPhotoCamera /></button></li>
        <li><button onClick={()=> dispatch(addBlock(initialBlock.text))}><MdOutlineTextFields /></button></li> 
        <li><button onClick={()=> dispatch(addBlock(initialBlock.title))}><MdOutlineTitle /></button></li>
      </ul>
    </nav>  
  )
}
export default Navbar
