import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer-container">

        <div className="footer-about">
          <h3>ABOUT US</h3>
          <p>
            2021 marks two decades of completion of Bandhan – Konnagar.
            With women's empowerment at its core, Bandhan – Konnagar
            was conceptualized to transform numerous lives in the last 20 years.
          </p>
        </div>

        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Admission Guideline</a></li>
            <li><a href="#">Infrastructure</a></li>
          </ul>
        </div>

        <div className="footer-address">
          <h3>CONTACT DETAILS</h3>
          <p><strong>The Bandhan School, Taldi</strong></p>
          <p>+91 7044444758</p>
          <p>admission.taldi@bandhanschool.org</p>
          <p>
            Village Bayerring Pole, South 24 Pgs, Taldi,
            PS: Canning - 743376, District 24 Parg (S)
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 copyright by Bandhan School</p>
      </div>
    </>
  )
}

export default Footer