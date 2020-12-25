import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="最怕突然听到你的消息，想念如果有声音" />
      <h1>突然好想你！</h1>
      <p>我不是一定要你回来</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
