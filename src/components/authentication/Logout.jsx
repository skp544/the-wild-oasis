import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { ButtonIcon, SpinnerMini } from "../";
import { useLogout } from "./useLogout";

const Logout = () => {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
};

export default Logout;
