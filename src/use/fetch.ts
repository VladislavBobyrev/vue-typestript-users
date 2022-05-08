import { Ref, ref } from "vue"

type FetchRequest = () => Promise<void>

interface usableFetch<T> {
  request: FetchRequest
  response: Ref<T | undefined>
}

export  function useFetch<T>(url: RequestInfo, options?: RequestInit):usableFetch<T> {
  const response = ref<T>()

  const request:FetchRequest = async () => {
    const res = await fetch(url, options)
    response.value = await res.json()
  }
  return {
    response,
    request
  }
}