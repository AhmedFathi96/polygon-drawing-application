import { ICoordinates } from "../../redux/slices/canvas/types";


export interface ICanvasStateProps{
    getInitPoint:ICoordinates,
    getPreviousPoint:ICoordinates,
    getNextPoint:ICoordinates
}

export interface ICanvasDispatchProps{
    onSetInitialPoints: (initPoint:ICoordinates) => void;
    onSetPreviousPoints: (initPoint:ICoordinates) => void;
    onSetNextPoints: (initPoint:ICoordinates) => void;
}

export interface ICanvasProps
  extends ICanvasStateProps,
  ICanvasDispatchProps {}