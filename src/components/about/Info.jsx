import React from "react"

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">+5 Years Working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">+6 Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-badge-check about__icon"></i>
        <h3 className="about__title">Available</h3>
        <span className="about__subtitle">to work full-time</span>
      </div>
    </div>
  )
}

export default Info
