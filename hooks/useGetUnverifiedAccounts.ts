import { useQuery } from "react-query";
import { getUnverifiedAccounts } from "../utils/api/user";

const useGetUnverifiedAccounts = () => {
    const {
        data: unverifiedAccountsData,
        isLoading: isUnverifiedAccountsLoading,
        refetch: refetchUnverifiedAccounts,
    } = useQuery("unverified-Accounts", async () => {
        return await getUnverifiedAccounts();
    });

    return {
        unverifiedAccountsData,
        isUnverifiedAccountsLoading,
        refetchUnverifiedAccounts,
    };
};

export default useGetUnverifiedAccounts;
