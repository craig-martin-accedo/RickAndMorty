const {gql, useQuery} = require('@apollo/client');

const GET_EPISODES = gql`
  query GetFilteredEpisodes($filter: FilterEpisode) {
    episodes(filter: $filter) {
      results {
        name
        episode
      }
    }
  }
`;

export const useFilteredEpisode = (season: String) => {
  const {error, data, loading} = useQuery(GET_EPISODES, {
    variables: {
      filter: {
        episode: season,
      },
    },
  });

  return {
    error,
    data,
    loading,
  };
};
