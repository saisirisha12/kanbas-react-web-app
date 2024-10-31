import React, { useState } from "react";
export default function Counter() {
const [count, setCount] = useState(7);
  return (
    <div id="wd-counter-use-state" >
      <h2>Counter: {count}</h2>
      <div className="d-flex justify-content-left gap-3">
        <button className="btn btn-success mr-3" onClick={() => setCount(count + 1)}
                id="wd-counter-up-click">Up</button> 
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}
                id="wd-counter-down-click">Down</button>
      </div>
    <hr/>
    </div>
);}

