// src/lib/query-client.ts
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const queryClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8080/index.php?p=actions/graphql/api',
    headers: {
      Authorization: 'Bearer JppbuSM5YuODPTSPU8BJKdFc7wbBQLAm',
    },
  }),
  cache: new InMemoryCache(),
})

export default queryClient