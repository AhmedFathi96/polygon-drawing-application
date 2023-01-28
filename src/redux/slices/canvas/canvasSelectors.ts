import { RootState } from "../../store";


export const selectInitialPoint = (state: RootState) => state.canvas.initialPoint
export const selectPreviousPoint = (state: RootState) => state.canvas.previousPoint
export const selectNextPoint = (state: RootState) => state.canvas.nextPoint
