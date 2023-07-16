import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <>
      <div className="form-image"></div>
      <div className="confirmation-container">
        <h1 className="confirmation">You booking is Confirmed</h1>
        <Link to="/" className="btn-cta btn-return">
          Return to Home
        </Link>
      </div>
    </>
  );
}
