import { Filter, TableOperations } from "../";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterFiled={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
