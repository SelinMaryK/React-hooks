import React, {useState, useEffect} from 'react'
import useDocTitle from './customHooks/useDocTitle';

function DocumentTitle() {
    const [count, setCount] = useState(0);
    useDocTitle(count);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count : {count}</button>
        </div>
    )
}

export default DocumentTitle
