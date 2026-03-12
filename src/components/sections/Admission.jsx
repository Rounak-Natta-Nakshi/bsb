import React from 'react'

const Admission = () => {
  return (
    <section className="admission-section">

      <div className="admission-header">
        <h2>Admission Process</h2>
        <div className="admission-line"></div>

        <p>
          The Bandhan Education Programme, which commenced in 2008,
          encourages a diverse age group of underprivileged children to
          begin and sustain academics in a congenial environment.
        </p>
      </div>

      <div className="admission-cards">

        {/* CARD 1 */}
        <div className="admission-card">
          <div className="card-bg-number">1</div>

          <div className="admission-icon">
            <i className="fa-solid fa-file-lines"></i>
          </div>

          <h3>Request Info</h3>

          <p>
            You will receive a confirmation email with login,
            password and instructions on how to access our portal.
          </p>

          <button className="admission-btn">
            More Info <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* CARD 2 */}
        <div className="admission-card">
          <div className="card-bg-number">2</div>

          <div className="admission-icon">
            <i className="fa-solid fa-laptop"></i>
          </div>

          <h3>Apply</h3>

          <p>
            After creating your new login and complete your online
            application using the credentials provided.
          </p>

          <button className="admission-btn">
            Apply Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* CARD 3 */}
        <div className="admission-card">
          <div className="card-bg-number">3</div>

          <div className="admission-icon">
            <i className="fa-solid fa-folder-open"></i>
          </div>

          <h3>Submit</h3>

          <p>
            Enter payment information and a $100.00 application fee.
            The form is submitted, you will receive confirmation.
          </p>

          <button className="admission-btn">
            Submit <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

      </div>

      <div className="admission-bottom">
        GROWING WITH EXCELLENCE , <br />
        STRONG FOUNDATIONS START HERE
      </div>

    </section>
  )
}

export default Admission