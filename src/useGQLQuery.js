import { useQuery } from 'react-query';
import { GraphQLClient, request } from 'graphql-request';

export const useGQLQuery = (key, query, variables, config = {}) => {
  const endpoint = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9ocu5vw0djy01uk0jvtb81s/master';

  const fetchData = async () => await request(endpoint, query, variables)

  return useQuery(key, fetchData, config)
};