import React from 'react'

    function tick() {
        const element = (
          <div>
            <h2>{new Date().toLocaleTimeString()}.</h2>
          </div>
        )
        return element
    } 
      setInterval(tick, 1000)

  export default tick