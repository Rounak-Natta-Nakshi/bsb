import React from "react";

function Form() {
  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Fill This Form for All the Admission Related Queries</h2>

        <form className="admission-form">
          <input type="text" placeholder="Student's Name" />
          <input type="date" />
          <input type="text" placeholder="Father's / Guardian's Name" />

          <select>
            <option>Choose Standard</option>
            <option>1st</option>
            <option>2nd</option>
            <option>3rd</option>
            <option>4th</option>
            <option>5th</option>
          </select>

          <input type="tel" placeholder="Phone No." />
          <input type="tel" placeholder="Alt. Phone No." />

          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Present School" />
        </form>

        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
}

export default Form;
