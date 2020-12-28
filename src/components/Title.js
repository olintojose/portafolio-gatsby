import React from "react"
import { FaDivide } from "react-icons/fa"

const Title = ({title}) => {
  return <div className="section-title">
      <h2>{title || 'default title'}</h2>
      <div className="underline"></div>
  </div>
}

export default Title
