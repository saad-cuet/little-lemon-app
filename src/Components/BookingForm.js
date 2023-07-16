import { Link } from "react-router-dom";

export default function Form() {
  return (
    <>
      <div className="form-image"></div>
      <div className="form-container">
        <form action="#">
          <h1>Reserve a table</h1>
          <div className="form-group">
            <label for="numPerson">Number of Person</label>
            <input
              type="number"
              placeholder="5"
              name="diners"
              id="numPerson"
              required
            />
          </div>

          <div className="form-group">
            <label for="date">Date</label>
            <input type="date" name="date" id="date" required />
          </div>

          <div className="form-group">
            <label for="time">Time</label>
            <select name="time" id="time" required>
              <option value="1700">5 PM</option>
              <option value="1800">6 PM</option>
              <option value="1900">7 PM</option>
              <option value="2000">8 PM</option>
              <option value="2100">9 PM</option>
              <option value="2200">10 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              placeholder="Mark"
              name="firstName"
              id="firstName"
              required
            />
          </div>

          <div className="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Webber"
              name="lastName"
              id="lastName"
              required
            />
          </div>

          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="markxyz@abc.com"
              name="email"
              id="email"
              required
            />
          </div>

          <div className="form-group">
            <label for="seating">Choose Seating Location</label>
            <select name="seating" id="seating" required>
              <option value="inside">Restaurant Inside</option>
              <option value="lawn">Outside Lawn</option>
              <option value="rooftop">Rooftop Area</option>
            </select>
          </div>

          <div className="form-group">
            <label for="occasion">Select Occasion</label>
            <select name="occasion" id="occasion" required>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversery">Anniversery</option>
            </select>
          </div>

          {/* <button type="submit" className="btn-cta btn-form">
            Confirm Reservation
          </button> */}

          <Link to="/confirmation" className="btn-cta btn-form">
            Confirm Reservation
          </Link>
        </form>
      </div>
    </>
  );
}
