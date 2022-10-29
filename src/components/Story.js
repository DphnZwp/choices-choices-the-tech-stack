import gql from 'graphql-tag';
import { useGQLQuery } from '../useGQLQuery';
import { useParams } from "react-router-dom";

const GET_STORY = gql`
  query {
    stories {
      id
      title
      content {
        html
      }
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
      <article className="story-detail">
        <section className="story-detail__hero">
          <h1>{data.stories[id - 1].title}</h1>
        </section>

        <section className="story-detail__content" dangerouslySetInnerHTML={{__html: data.stories[id - 1].content.html}}>
        </section>
      </article>
    )
}

export default Story;