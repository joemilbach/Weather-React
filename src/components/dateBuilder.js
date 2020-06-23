import React from "react";

const DateBuilder = d => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const day = days[d.getDay()]
  const date = d.getDate()
  const month = months[d.getMonth()]
  const year = d.getFullYear()

  return <div className="card-date"><span className="text-display">{day}</span> {date} {month} {year}</div>
}

export default DateBuilder;
