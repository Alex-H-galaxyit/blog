"use client";

import useUserStore from "@/store/user";

export const User = () => {
  const user = useUserStore((state) => state.data);
  const isLoading = useUserStore((state) => state.isLoading);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        user && (
          <div>
            <p>Name: {user?.firstName}</p>
            <p>Email: {user?.email}</p>
            <p>Phone: {user?.phone}</p>
          </div>
        )
      )}
    </>
  );
};
