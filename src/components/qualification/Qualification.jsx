import React, { useState } from "react"
import "./qualification.css"

const Qualification = () => {
  const [toogleState, setToogleState] = useState(1)

  const toogleTab = index => {
    setToogleState(index)
  }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toogleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toogleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
          <div className={toogleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toogleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toogleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MSCS in Computer Science</h3>
                <span className="qualification__subtitle">Maharishi International University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2023 - Present</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Bachelors in Computing</h3>
                <span className="qualification__subtitle">London Metropolitan University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2018 - 2021</i>
                </div>
              </div>
            </div>
          </div>

          <div className={toogleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Web Developer</h3>
                <span className="qualification__subtitle">Wiseyak Inc.</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - 2023</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Junior Full Stack Devloper</h3>
                <span className="qualification__subtitle">F. Five Enterprise Pvt. Ltd.</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2020 - 2021</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
