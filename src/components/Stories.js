import gql from 'graphql-tag';
import { useGQLQuery } from '../useGQLQuery';

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
        <section className="create-story">
          <img className="create-story__clock" src="/clock.png" alt=""/>
          <h2 className="create-story__heading">Click on the book to create a story</h2>
          <svg className="create-story__icon" width="62" height="65" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 7L32 57.2765" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 32.1382L31 57.2765L55 32.1382" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <a className="create-story__illustration-link" href="/create-story">
            <img className="create-story__illustration" src="/book-stand.svg" alt=""/>
          </a>
        </section>
        <section className="stories">
        {data.stories.map((story, index) => (
          <article className="story">
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
