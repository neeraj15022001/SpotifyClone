import React from 'react';
import "./Middle.css";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import Range from "./Range/Range.jsx";

function Middle() {
    return (
        <div className="middle">
            <div className="middle__upper">
                <ShuffleIcon />
                <SkipPreviousIcon />
                <PlayCircleFilledIcon className="middle__upper__play" />
                <SkipNextIcon />
                <RepeatIcon />
            </div>
            <div className="middle_lower">
                <Range />
            </div>
        </div>
    )
}

export default Middle
