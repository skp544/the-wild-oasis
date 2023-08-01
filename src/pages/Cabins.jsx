import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

const Cabins = () => {

  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return <div>
    <img src="https://wkjqiyjgllamggnfzkdz.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" alt="" />
  </div>;
};

export default Cabins;
