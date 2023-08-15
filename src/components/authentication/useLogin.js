import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user);
      toast.success("User Logged in.");
      navigate("/dashboard");
    },

    onError: (err) => {
      console.log("Error ", err);
      toast.error("Provided email password are incorrect");
    },
  });
  return { login, isLoading };
}
