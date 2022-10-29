import gql from 'graphql-tag';
import { useGQLQuery } from '../useGQLQuery';
import Create from '../components/Create'

const GET_STORIES = gql`
  query {
    stories {
      id
      title
      image
    }
  }
`;

function Stories() {
   // Fetch data from custom hook that uses React-Query
   const { data, isLoading, error } = useGQLQuery('stories', GET_STORIES);
   console.log(data);
   if (isLoading) return <section>Loading ...</section>;
   if (error) return <div>Something went wrong ...</div>;
    return(
      <main>
        <header className="hero">
            <h1 className="hero__heading">Read the stories</h1>
        </header>

        <Create />

        <section className="stories">
        {data.stories.map((story, index) => (
          <article className="story" key={story.id}>
            <section className="story__title-background">
              <h2>{story.title}</h2>
            </section>

            <a className="story__link" href={index+1}>Read story {index+1} »</a>

            <section className="story__image-background">
            <img className="story__image" src={story.image} alt=""/>
          </section>
          </article>
        ))}
        </section>
      </main>
    )
}

export default Stories;
