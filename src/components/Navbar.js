
function Navbar({addBlock}) {
  return (
    <nav className="navbar">
      <ul>
        <li><button><img src="./images/icons/background.png" alt="background" /></button></li>
        <li><button onClick={addBlock}><img src="./images/icons/title.png" alt="title" /></button></li>
        <li><button><img src="./images/icons/text.png" alt="text" /></button></li>
        <li><button><img src="./images/icons/image.png" alt="img" /></button></li>
      </ul>
    </nav>  
  )
}

export default Navbar
