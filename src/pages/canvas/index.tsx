
import React, { useEffect, useRef, useState } from 'react'
import * as styles from './styles.module.scss'
import { ICanvasProps } from './types';
const  Canvas:React.FC<ICanvasProps> = (props:ICanvasProps) => {
  

    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    const  canvasReference = useRef<any>(null);

    const [coordinates, setCoordinates] = useState({
        xCoordinate:0,
        yCoordinate:0
    })

    const [initPoint, setInitPoint] = useState(true)     
    useEffect(() => {

        if (canvasReference.current) {
            const context = canvasReference.current.getContext('2d');
            if (context) {
                context.scale(2, 2);
                // context.clearRect(0, 0, context.width, context.height);
                if(coordinates.xCoordinate !== 0 && coordinates.yCoordinate !==0){
                    if(props.getNextPoint.xCoordinate >= (props.getInitPoint.xCoordinate -4) &&  props.getNextPoint.xCoordinate <= (props.getInitPoint.xCoordinate + 4) && props.getNextPoint.yCoordinate >= (props.getInitPoint.yCoordinate -4) &&  props.getNextPoint.yCoordinate <= (props.getInitPoint.yCoordinate + 4)){
                        // context.scale(2, 2)
                        props.onSetInitialPoints({xCoordinate:coordinates.xCoordinate,
                            yCoordinate:coordinates.yCoordinate})
                        props.onSetNextPoints({xCoordinate:coordinates.xCoordinate,
                                yCoordinate:coordinates.yCoordinate})

                        setInitPoint(true);
                    }

                    if(initPoint){
                        point(props.getNextPoint.xCoordinate,props.getNextPoint.yCoordinate,context)
                        setInitPoint(false)
                        
                    }else{
                        point(coordinates.xCoordinate,coordinates.yCoordinate,context)
                        line(props.getPreviousPoint.xCoordinate,props.getPreviousPoint.yCoordinate,props.getNextPoint.xCoordinate,props.getNextPoint.yCoordinate,context)
                    }
                    
                }
                
            }
        }


        
    
    },[coordinates]);


    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    const  getCoordinates = (event: any) =>{

        if((coordinates.xCoordinate === 0 && coordinates.yCoordinate ===0) || initPoint){
            props.onSetInitialPoints({xCoordinate:event.clientX,yCoordinate:event.clientY})
            setInitPoint(true)
        }else{
            props.onSetPreviousPoints({xCoordinate:coordinates.xCoordinate,yCoordinate:coordinates.yCoordinate})
        }

        props.onSetNextPoints({xCoordinate:event.clientX,yCoordinate:event.clientY})
        setCoordinates({ 
            xCoordinate:event.clientX,
            yCoordinate:event.clientY
        })        
            
    }

    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    const point = (x:number, y:number, canvas:any) =>{
        canvas.beginPath();
        canvas.arc(x, y, 4, 0, 2 * Math.PI, true);
        canvas.fill();
    }

    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    const line= (fromX:number,fromY:number,toX:number, toY:number, canvas:any) =>{        
        // canvas.beginPath();
        canvas.moveTo(fromX, fromY);
        canvas.lineTo(toX, toY);
        canvas.stroke();
        
    }
      
     
     return (
        <div className={styles.default.canvasWrapper}>
            {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <canvas
             onClick={(e)=>{getCoordinates(e)}}
             ref={canvasReference} 
             width="1600" height="800"
             className={styles.default.canvas}
            />
        </div>

     );
}

export default Canvas