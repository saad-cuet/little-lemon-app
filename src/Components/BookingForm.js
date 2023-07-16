import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [numPerson, setNumPerson] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [seating, setSeating] = useState("");
  const [occasion, setOccasion] = useState("");
  const [booked, setBooked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const requiredFormInput = [
      numPerson,
      date,
      time,
      firstName,
      lastName,
      email,
    ];

    /////////// Form Input Validation
    if (requiredFormInput.some((cur) => cur < 1 || cur === "")) return;

    const data = {
      numPerson,
      date,
      time,
      firstName,
      lastName,
      email,
      seating,
      occasion,
      id: Date.now(),
    };
    console.log(data);

    setNumPerson(1);
    setDate("");
    setTime("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setSeating("");
    setOccasion("");

    setBooked(true);
  }

  /////////// Nagigate to confirmation page
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!booked) return;
      navigate("/confirmation");
    },
    [booked, navigate]
  );

  return (
    <>
      <div className="form-image"></div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Reserve a table</h1>
          <div className="form-group">
            <label htmlFor="numPerson">Number of Person</label>
            <input
              type="number"
              placeholder="5"
              name="diners"
              id="numPerson"
              required
              value={numPerson}
              onChange={(e) => setNumPerson(+e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <select
              name="time"
              id="time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="1700">5 PM</option>
              <option value="1800">6 PM</option>
              <option value="1900">7 PM</option>
              <option value="2000">8 PM</option>
              <option value="2100">9 PM</option>
              <option value="2200">10 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Mark"
              name="firstName"
              id="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Webber"
              name="lastName"
              id="lastName"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="markxyz@abc.com"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="seating">Choose Seating Location</label>
            <select
              name="seating"
              id="seating"
              value={seating}
              onChange={(e) => setSeating(e.target.value)}
            >
              <option value="inside">Restaurant Inside</option>
              <option value="lawn">Outside Lawn</option>
              <option value="rooftop">Rooftop Area</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Select Occasion</label>
            <select
              name="occasion"
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversery">Anniversery</option>
            </select>
          </div>

          <button type="submit" className="btn-cta">
            Confirm Reservation
          </button>
        </form>
      </div>
    </>
  );
}
