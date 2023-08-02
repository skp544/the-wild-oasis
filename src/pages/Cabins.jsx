import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";
import { CabinTable, Heading, Row } from "../components";

const Cabins = () => {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </>
  );
};

export default Cabins;
