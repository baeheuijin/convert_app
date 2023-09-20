import React, { useState } from 'react'
import styles from './MetersToCentimeters.module.css'
import MetersToContimenters from './component/metersToCentimet'

function MetersToContimenters() {
  const [amount, seAmount] = useState("1");
  function handleChange(e) {
     setAmount(e.target.value)
  }
  return (
    <div>
        <div className="column-a">
            <input type="text" id="meter" value={amount} onChange={handleChange} />
            <label htmlFor="meter">미터(m)</label>
        </div>
        <div className="column-b">
            <p>=</p>
        </div>
        <div className="column-c">
            <input type="text" id="centimeter"value={amount * 100} />
            <label htmlFor="centimeter">센티미터(m)</label>
        </div>
    </div>
  )
}

export default MetersToContimenters