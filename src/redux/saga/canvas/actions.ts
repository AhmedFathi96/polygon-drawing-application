import { ICoordinates } from "../../slices/canvas/types";

export const addInitPointActionTypes = {
    ADD_INIT_POINT: "ADD_INIT_POINT",
    ADD_INIT_POINT_FAILED: "ADD_INIT_POINT_FAILED"
  };
  

  export interface addInitPointActions {
    type: typeof addInitPointActionTypes.ADD_INIT_POINT;
    initPoint: ICoordinates;
  }

