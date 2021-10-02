import { usersCollection } from "../firebase";

export async function getUserByEmployeeId(employeeId) {
  const ss = await usersCollection.where("employeeId", "==", employeeId).get();
  if (ss.empty) {
    return null;
  }
  return {
    id: ss.docs[0].id,
    ...ss.docs[0].data(),
  };
}
