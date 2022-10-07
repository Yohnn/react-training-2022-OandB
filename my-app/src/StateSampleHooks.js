import {React, useState} from 'react';

function StateSampleHooks () {
    let nameString1 = "John Smith";
    let nameString2 = "Sophie Turner"
    const [name, setName] = useState(nameString1);

    function changeName(){
        setName(function(n) {
            if (n === nameString1) {
                n = nameString2;
                return n;
            } else if (n === nameString2) {
                n = nameString1;
                return n
            }
        });
    }

    return(
        <div className='container-text-center'>
            <div className='float-start px-3 pt-1 fs-5'>
                <button onClick={changeName}>Click me!!!</button>
            </div>
            <div className='float-start pt-1 fs-4'>
                {name}
            </div>
        </div>

    )

}

export default StateSampleHooks;