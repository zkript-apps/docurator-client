import { useQuery } from "react-query";
import { getForm137 } from "../utils/api/form137";

const useForm137 = () => {
  const {
    data: form137Data,
    isLoading: isForm137Loading,
    refetch: refetchForm137,
  } = useQuery("form137", async () => {
    return await getForm137();
  });

  return {
    form137Data,
    isForm137Loading,
    refetchForm137,
  };
};

export default useForm137;
