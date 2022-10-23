import React from 'react'
import { useEffect, useState } from 'react';
import "./Time.css"

const Timer= ({started}) => {
    const [number, setNumber] = useState(3);
    useEffect(() => {
      if (number > 0) {
        setTimeout(decrementer, 1000);
      }
      function decrementer() {
        setNumber(number - 1);
      }
    }, [number]);
    console.log(started)
    return(
            <div className="counter_wrapper">
            {(started ? 
                number ? 
                  <span className="counter_number">Starting in {number}</span> :
                  <span className="counter_number">GO!</span>:
              <div>Please wait for more players to join.</div>
            )}
          </div>

    )
}

export default Timer