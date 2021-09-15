import React from 'react'

     
      setInterval(() => {
      function tick() {
        const element = (
          <div>
            <h2>{new Date().toLocaleTimeString()}.</h2>
          </div>
        )
        return element
    }
      }, 1000)

  export default tick
