import Hello from '/lib/myReactComponents/Hello';
import dayjs from 'dayjs';
import React, {useState} from 'react';

export const Example = (props: any) => {

    const [count, setCount] = useState(0);

    return <>
            <Hello/>
            <div>Part: {dayjs().format()}</div>
            <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
    </>;
};


export default Example;
