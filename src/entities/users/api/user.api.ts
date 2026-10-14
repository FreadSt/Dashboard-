import { getApiData } from '@api/api'
import type { User, UsersResponse } from '@entities/users/model/user.types'

export function getUsersList(): Promise<UsersResponse> {
  return getApiData<UsersResponse>('/users')
}

export function getUser(id: number): Promise<User> {
  return getApiData<User>(`/users/${id}`)
}

export function searchUser(query: string): Promise<UsersResponse> {
  return getApiData<UsersResponse>(`/users/search?q=${encodeURIComponent(query)}`)
}
