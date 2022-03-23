
class InitialBlock {
  get background() {
    return {
      name: "background",
      id: Date.now(),
      style: {
        position: 'relative',
        minHeight: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url('./images/lorem.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '50px 15px',
        fontSize: '24px',
        fontWeight: 700,
        color: '#fff',
      },
      content: 'Заголовок'
    }
  }
  get image() {
    return {
      name: "image",
      id: Date.now(),
      style: {position: 'relative', minHeight: '200px', 'width': '100%', display: "flex", alignItems: "center", justifyContent: "center"},
      image: './images/no-photo.png'
    }
  }
  get title() {
    return {
      name: 'title',
      id: Date.now(),
      style: {fontSize: '24px', minHeight:'50px', color:'#000', width:"100%", textAlign: "center", fontWeight: 700},
      content: "Заголовок"
    }
  }
  get text() {
    return {
      name: 'text',
      id: Date.now(),
      style: {fontSize: '16px', minHeight:'350px', color:'#000', width:"100%", textAlign: "left"},
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu`
    }
  }
}

export let initialBlock = new InitialBlock() 


// export const initialBlock = {
//   background:
//   {
//     name: "background",
//     id: Date.now(),
//     style: {
//       position: 'relative',
//       minHeight: '100px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundImage: `url('./images/lorem.jpg')`,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       padding: '50px 15px',
//       fontSize: '24px',
//       fontWeight: 700,
//       color: '#fff',
//     },
//     content: 'Заголовок'
//   },
//   image:
//   {
//     name: "image",
//     id: Date.now(),
//     style: {position: 'relative', minHeight: '200px', 'width': '100%', display: "flex", alignItems: "center", justifyContent: "center"},
//     image: './images/no-photo.png'
//   },
//   title:
//   {
//     name: 'title',
//     id: Date.now(),
//     style: {fontSize: '24px', minHeight:'50px', color:'#000', width:"100%", textAlign: "center", fontWeight: 700},
//     content: "Заголовок"
//   },
//   text:
//   {
//     name: 'text',
//     id: Date.now(),
//     style: {fontSize: '16px', minHeight:'350px', color:'#000', width:"100%", textAlign: "left"},
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu`
//   }
// }
