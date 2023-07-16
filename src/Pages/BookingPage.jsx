import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Form from "../Components/BookingForm";

export default function BookingPage() {
  // Lifting state
  const availableTimes = [17, 18, 19, 20, 21, 22];

  return (
    <>
      <Nav />
      <Form availableTimes={availableTimes} />
      <Footer />
    </>
  );
}
