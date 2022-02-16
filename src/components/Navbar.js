import EditorBlock from './EditorBlock'

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={EditorBlock} >
            <img src="./images/icons/background.png" alt="background" />
          </button>
        </li>
        <li>
          <button id="data-block-title">
            <img src="./images/icons/title.png" alt="title" />
          </button>
        </li>
        <li>
          <button id="data-block-text">
            <img src="./images/icons/text.png" alt="text" />
          </button>
        </li>
        <li>
          <button id="data-block-image">
            <img src="./images/icons/image.png" alt="image" />
          </button>
        </li>
      </ul>
    </nav>  
  )
}

export default Navbar
