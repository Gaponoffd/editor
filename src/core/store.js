import { configureStore } from '@reduxjs/toolkit'
import blockSlice from './blockSlice'

export default configureStore({
  reducer: {
    block: blockSlice,
  },
})
