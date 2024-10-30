import { useQuery } from "@apollo/client"

import { GET_SIGN_UP } from "../../../queries/signUpsQuery"

export function useDetailPage({ id }) {
  const { data, loading, error } = useQuery(GET_SIGN_UP, {
    noThrow: true,
    variables: {
      id,
    },
  })

  return {
    data: data?.signUp || [],
    error,
    loading,
  }
}
