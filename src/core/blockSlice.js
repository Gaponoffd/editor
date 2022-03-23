import { createSlice } from '@reduxjs/toolkit'

export const blockSlice = createSlice({
  name: 'block',
  initialState: {block: []},
  reducers: {
    addBlock: (state, action) => {
      state.block.push(action.payload)
    },
    deleteBlock: (state, action) => {
      state.block = state.block.filter(item => item.id !== action.payload)
    },
    editText: (state, action) => {
      let id = action.payload[0];
      let text = action.payload[1];
      state.block.map(item => {
        if (item.id === id) {
          item.content = text
        }
        return true
      })
    },
    editStyle: (state, action) => {
      let id = action.payload[0];
      let param = action.payload[1];
      let value = action.payload[2];
      state.block.map(item => {
        if (item.id === id) {
          item.style[param] = value
        }
        return true
      })
    }
  },
})


export const { addBlock, deleteBlock, editText, editStyle } = blockSlice.actions

export default blockSlice.reducer