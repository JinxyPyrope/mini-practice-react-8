import React from "react"
import { data } from "./data.js"
import "./Display.css"

const listData = data.map(joke => (
  <div className="test__container">
    <h2>{joke.setup}</h2>
    <p>{joke.punchline}</p>
  </div>
))

const Display = () => {
  return <>{listData}</>
}

export default Display
