import { useState } from "react";
import {
  Button,
  CabinTable,
  Heading,
  Row,
  CreateCabinForm,
} from "../components";

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm((prev) => !prev)}>
          Add new Cabin
        </Button>
      </Row>

      {showForm && <CreateCabinForm />}
    </>
  );
};

export default Cabins;
