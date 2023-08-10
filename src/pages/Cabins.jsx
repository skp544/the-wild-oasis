import { CabinTable, Heading, Row, AddCabin } from "../components";

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        <AddCabin />
      </Row>
    </>
  );
};

export default Cabins;
