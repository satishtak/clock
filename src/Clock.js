import React, { useEffect, useState } from 'react'

function Clock() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const interval =setInterval(
      () => {
        const dateVal = new Date();
        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let month = ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];

        setValue({
          hour: dateVal.getHours(),
          minute: dateVal.getMinutes(),
          second: dateVal.getSeconds(),
          weekDay: week[dateVal.getDay()],
          date: dateVal.getDate(),
          month: month[dateVal.getMonth()],
          year: dateVal.getFullYear()
        })
      },
      1000
    );
     
    return () => {
      clearInterval(interval);
    }
  }, [])
  return (
    <div>
      {value !== null ? (
        <>
          <div>
            {value.weekDay}
          </div>
          <div style={{ position: "relative" }}>
            <div style={{
              display: "inline-block",
              fontSize: 84,
              fontWeight: 900
            }}>
              {value.hour % 12}:
              {(value.minute < 10 ? `0${value.minute}` : value.minute)}
            </div>
            <div style={{ display: "inline-block" }}>
              <div style={{
                position: "absolute",
                top: 15
              }}>
                {value.hour < 12 ? 'am' : 'pm'}
              </div>
              <div style={{
                position: "absolute",
                bottom: 20,
              }}>
                {(value.second < 10 ? `0${value.second}` : value.second)}
              </div>
            </div>
          </div>
          <div>
            {value.month} {value.date} {value.year}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Clock;
