import {useState} from "react";
import {NavigationBar} from "./NavigationBar";
import {Footer} from "./Footer";
import React from 'react'

export const ToolsPages = (props) => {

    const [chainring, setChainring] = useState(38);
    const [cassette, setCassette] = useState(11);
    const [wheelsize, setWheelsize] = useState(2800);
    const [cadence, setCadence] = useState(90);

    const calculateRatio = () => {
        return  chainring / cassette
    }

    const calculateSpeed = () => {
    let result = 0.00006 * cadence * wheelsize * (chainring / cassette)
        return result
    }


    return <div>
            <div className="speedCalc">
                <div className="speedCalc__container">
                    <label>Chainring tooth </label>
                    <input name="chainring"
                           type="number"
                           className="chainring"
                           value={chainring}
                           onChange={e => setChainring(e.target.value)}
                    />
                    <label>Cassette tooth </label>
                    <input name="cassette" type="number"
                           className="cassette" value={cassette}
                           onChange={e => setCassette(e.target.value)}/>
                    <label>Wheel size (in cm for circle) </label>
                    <input name="wheelSize" type="number"
                           className="wheelSize" value={wheelsize}
                           onChange={e => setWheelsize(e.target.value)}/>
                    <label>Cadence </label>
                    <input name="cadence" type="number"
                           className="cadence" value={cadence}
                           onChange={e => setCadence(e.target.value)}/>
                    <div className="gearsRatio">Gear ratio: {calculateRatio()}</div>
                    <div className="speedResult">Km/h: {calculateSpeed()} Merged</div>
                </div>
            </div>
            <NavigationBar />
            <Footer />
    </div>

}