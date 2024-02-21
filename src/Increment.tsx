import { useState } from 'react';
import useStore from './store';

export default function Increment() {

    const [value, setValue] = useState<number>(0)
    const { year, day, inc, dec } = useStore();


    function res() {
        setValue(year + day);
    }

    return (
        <div>

            <button onClick={inc}>Increment From increment.tsx</button>
            <button onClick={dec}>Decreace the number of days</button>
            <button onClick={res}>Console log Resutls</button>
            <p>Res: {value}</p>
        </div>
    )
}
