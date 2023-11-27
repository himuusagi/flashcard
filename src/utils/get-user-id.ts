import { getServerSession } from "next-auth";

export const getUserId = async () => {
  const session = await getServerSession();
  return session?.user?.email;
};
