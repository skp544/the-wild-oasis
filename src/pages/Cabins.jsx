import {
  CabinTable,
  Heading,
  Row,
  AddCabin,
  CabinTableOperations,
} from "../components";

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />

        <AddCabin />
      </Row>
    </>
  );
};

export default Cabins;
