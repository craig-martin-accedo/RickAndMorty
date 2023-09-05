const {gql, useQuery} = require('@apollo/client');

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        status
        species
        gender
        location {
          name
        }
      }
    }
  }
`;

export const useCharacters = () => {
  const {error, data, loading} = useQuery(GET_CHARACTERS);
  console.log({
    loading,
    error,
    data,
  });

  return {
    error,
    data,
    loading,
  };
};
