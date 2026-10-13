import { API_URL } from "../../constants/apiURL"

export async function getApiData<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, options)
  if(!response.ok) {
    throw new Error('API request failed')
  }
  return response.json()
}