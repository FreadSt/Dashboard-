import { getApiData } from '@api/api'
import type { User, UsersResponse } from '@entities/users/model/user.types'

export async function getUsersList() {
  return getApiData<UsersResponse>('/users')
}

export async function getUser(id: number) {
  return getApiData<User>(`/users/${id}`)
}

export async function searchUser(query: string) {
  return getApiData<UsersResponse>(`/users/search?q=${encodeURIComponent(query)}`)
}
