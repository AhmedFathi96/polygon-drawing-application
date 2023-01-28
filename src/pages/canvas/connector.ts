import { connect } from "react-redux";
import Canvas from ".";
import { selectInitialPoint, selectNextPoint, selectPreviousPoint } from "../../redux/slices/canvas/canvasSelectors";
import { setInitialPoint, setNextPoint, setPreviousPoint } from "../../redux/slices/canvas/canvasSlice";
import { ICoordinates } from "../../redux/slices/canvas/types";
import { AppDispatch, RootState } from "../../redux/store";
import { ICanvasDispatchProps, ICanvasStateProps } from "./types";

const mapStateToProps = (state: RootState): ICanvasStateProps => ({
    getInitPoint: selectInitialPoint(state),
    getPreviousPoint: selectPreviousPoint(state),
    getNextPoint: selectNextPoint(state)
});
  
const mapDispatchToProps = (
    dispatch: AppDispatch
): ICanvasDispatchProps => ({
    onSetInitialPoints: (initPoint:ICoordinates) => dispatch(setInitialPoint(initPoint)),
    onSetPreviousPoints: (initPoint:ICoordinates) => dispatch(setPreviousPoint(initPoint)),
    onSetNextPoints: (initPoint:ICoordinates) => dispatch(setNextPoint(initPoint)),
});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
  