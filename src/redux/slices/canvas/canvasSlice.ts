import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICoordinates } from './types'

interface CounterState {
  initialPoint: ICoordinates,
  previousPoint: ICoordinates,
  nextPoint: ICoordinates,
}
const initialState: CounterState = {
    initialPoint: {
        xCoordinate:0,
        yCoordinate:0
    },
    previousPoint: {
        xCoordinate:0,
        yCoordinate:0
    },
    nextPoint: {
        xCoordinate:0,
        yCoordinate:0
    }
}

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    setInitialPoint: (state, action: PayloadAction<ICoordinates>) => {
        state.initialPoint = action.payload
    },
    setPreviousPoint: (state, action: PayloadAction<ICoordinates>) => {
        state.previousPoint = action.payload
    },
    setNextPoint: (state, action: PayloadAction<ICoordinates>) => {
        state.nextPoint = action.payload
    },
    
  },
})

export const { setInitialPoint, setPreviousPoint, setNextPoint } = canvasSlice.actions

export default canvasSlice.reducer