function Create() {
    return(
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
    )
}

export default Create;