import { BASE_URL } from "../../constants/api.js";

export async function getAuctions() {
  const response = await fetch(`${BASE_URL}listings`);
  const json = await response.json();

  if (response.ok) {
    return json;
  }

  throw new Error(json.errors[0].message);
}
