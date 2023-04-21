import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Board.module.css';

import BiBFS from '../algoAndAnimate/BiBFS';
import { useState, useEffect } from 'react';

const Board = () => {
    const [ width, setWidth ] = useState(window.innerWidth);
    const [ height, setHeight ] = useState(window.innerHeight)
    let row = 15;

    let actualSize = width > 1025 ? 0.33 * width : width < 992 ? 0.6 * width : 0.3 * width;
    let actualWidth = actualSize/row;
    let actualHeight = actualSize/row;

    let r;
    let c;
    let idName;
    let boardArray = [];
    for (r = 0; r < row; r++){
        let rowArray =[]
        for (c = 0; c < row; c++){
            idName = String(r) + "," + String(c);
            rowArray.push(idName);
        }
        boardArray.push(rowArray);
    }

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
    }
        window.addEventListener('resize', handleResize)
        }
    )

    const [ startFound, setStartFound ] = useState(false);
    const [ endFound, setEndFound ] = useState(false);
    const [ start, setStart ] = useState([]);
    const [ end, setEnd ] = useState([]);

    const handleNodeClick = (e) => {
        let coor = e.split(',');
        let pos = [Number(coor[0]), Number(coor[1])];
        if (!startFound){
            if (pos.toString() === end.toString()){
                setEndFound(false);
                setEnd([]);
                let allClasses = document.getElementById(e).className.split(' ');
                let modClasses = allClasses.filter(each => each !== "bg-primary");
                document.getElementById(e).className = modClasses.join(" ");
            }
            setStartFound(true);
            setStart(pos);
            document.getElementById(e).className += " bg-secondary";
        }
        else if (startFound && start.toString() === pos.toString()){
            setStartFound(false);
            setStart([])
            let allClasses = document.getElementById(e).className.split(' ');
            let modClasses = allClasses.filter(each => each !== "bg-secondary");
            document.getElementById(e).className = modClasses.join(" ");
        }
        else if (!endFound){
            setEndFound(true);
            setEnd(pos);
            document.getElementById(e).className += " bg-primary";
        }
        else if (endFound && end.toString() === pos.toString()){
            setEndFound(false);
            setEnd([]);
            let allClasses = document.getElementById(e).className.split(' ');
            let modClasses = allClasses.filter(each => each !== "bg-primary");
            document.getElementById(e).className = modClasses.join(" ");
        }
    }

    const [ disableState, setDisableState ] = useState(true);
    
    useEffect(() => {
        if (startFound && endFound){
            setDisableState(false);
        }
        else{
            setDisableState(true);
        }
    }
    ,[endFound, startFound])

    const callBiBFS = () => {
        setDisableState(true);
        BiBFS(start, end, row);
    }

    const handleReset = () => {
        window.location.reload(false);
    }

    return (
        <main className="d-flex flex-column ms-auto me-auto mt-auto mb-auto">
            <div className="text-light fst-italic mb-2" style={{ maxWidth: `${actualWidth*row}px` }}>Click on two cells in the board and run the algorithm.</div>
            { 
                boardArray.map((each, i) =>
                <div key={i} className="d-flex">
                { each.map(e => <span id={e} className="border" style={{ width:`${actualWidth}px`, height:`${actualHeight}px`, backgroundColor: "rgb(255,255,255)" }} key={e} onClick={ () => handleNodeClick(e) } />) 
                }
                </div>
                )
            }
            <div className="mb-3 mt-3">
                <button className={`${ classes.button10 } me-3 mb-md-0 mb-2 mt-md-0 mt-2 align-self-center`} onClick={ callBiBFS } disabled={ disableState }>Run Bidirectional-BFS</button>
                <button className={`${ classes.button10 } me-3 mb-md-0 mb-2 mt-md-0 mt-2 align-self-center`} onClick={ handleReset } disabled={ !disableState }>Reset</button>
            </div>
        </main>
    )
}

export default Board;