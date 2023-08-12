import { Row, Heading, BookingTable } from "../components";

const Bookings = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <p>TEST</p>
      </Row>

      <BookingTable />
    </>
  );
};

export default Bookings;
