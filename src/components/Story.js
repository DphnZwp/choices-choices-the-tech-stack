import gql from 'graphql-tag';
import { useGQLQuery } from '../useGQLQuery';
import { useParams } from "react-router-dom";

const GET_STORY = gql`
  query {
    stories {
      id
      title
      image
    }
  }
`;

function Story() {
  // Fetch data from custom hook that uses React-Query
  const { data, isLoading, error } = useGQLQuery('stories', GET_STORY);
  const { id } = useParams();
  console.log(data);
  if (isLoading) return <section>Loading ...</section>;
  if (error) return <div>Something went wrong ...</div>;
    return(
      <h1>{data.stories[id - 1].title}</h1>
    )
}

export default Story;