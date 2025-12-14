import React, {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>Cчет: {count}</p>
            <button className='count' onClick={() => setCount(count + 1)}>+</button>
            <button className='count' onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};

export default App;
