import React from "react";
import './styles.css'
import { ClockLoader } from 'react-spinners'

const Loading = () => (
    <div className="Loading">
        <ClockLoader size={200} Loading />
    </div>
);
 
export default Loading;