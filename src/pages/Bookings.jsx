import {
  Row,
  Heading,
  BookingTable,
  BookingTableOperations,
} from "../components";

const Bookings = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
};

export default Bookings;
