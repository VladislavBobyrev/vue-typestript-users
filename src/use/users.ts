import { ref, Ref } from "vue";
import { useFetch } from "./fetch";

interface User {
  id: Number
  name: String
  email: String
}
type usableUsers = Promise<{ users: Ref<User[] | undefined> }>

export async function useUsers(): usableUsers {
  const loading = ref(false)

  const { response: users, request } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')

  if (!loading.value) {
    await request()
    loading.value = true
  }

  return {
    users
  }
}