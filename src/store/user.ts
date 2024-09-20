import axios, { AxiosError } from "axios";
import { create } from "zustand";

interface User {
  firstName: string;
  email: string;
  phone: string;
}

interface UserState {
  data: User | null;
  isLoading: boolean;
  error: null | string;
  fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  data: null,
  error: null,
  isLoading: false,
  fetchUser: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.get("https://dummyjson.com/users/1");
      const user = response.data;

      const { firstName, email, phone } = user;

      set({ data: { firstName, email, phone }, error: null });
    } catch (error) {
      const errorMessage =
        (error as AxiosError).message || "An unknown error occurred";
      set({ error: errorMessage });
    } finally {
      set({ isLoading: false });
    }
  },
}));

useUserStore.getState().fetchUser();

export default useUserStore;
