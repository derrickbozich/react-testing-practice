import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState <number>(0);
    const handleClick = () => {
        setCount(count + 1)
    }
   
    return (
        <div className="d-flex justify-content-center flex-column text-center">
            <header>
                <h1 className="mt-4 mb-5">The Counter</h1>
            </header>
            <main role="main">
                <div className="d-flex justify-content-center">
                    <button
                        type="button"
                        className="btn btn-info mx-2"
                        disabled={count > 4}
                        onClick={handleClick}
                    >
                        Increment
                    </button>

                    <p data-testid="count">Current Count: {count}</p>
                </div>
               
          
            </main>
        </div>
    );
}

export default Counter;