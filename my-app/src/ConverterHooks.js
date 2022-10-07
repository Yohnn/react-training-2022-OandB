import {React, useRef} from 'react';

function ConverterHooks () {
    let cmToInConst = 2.54;

    const centimeters = useRef();
    const inches = useRef();

    function getCm (e) {
        const tempCm = parseFloat(e.target.value);
        const newIn = tempCm * cmToInConst;
        inches.current.value = newIn;
    }

    function getIn (e) {
        const tempIn = parseFloat(e.target.value);
        const newCm = tempIn / cmToInConst;
        centimeters.current.value = newCm
    }

    return(
        <div className='container'>
            <input type='number' id='centimeter' ref={centimeters} placeholder={"centimeters"} onChange={getCm} className='form-control'/>
            <input type='number' id='inch' ref={inches} placeholder={"inches"} onChange={getIn} className='form-control'/>
        </div>
    )

}

export default ConverterHooks;