const chapters = [
  {
    when: 'Before university',
    text: 'A Fossbytes post pointed me to Code.org and Khan Academy. I spent the months before admission learning Python and building small games, then moved on to HTML and CSS.',
  },
  {
    when: 'First real job',
    text: 'At Oduduwa University I was asked to build a website for my fellowship. That project taught me Bootstrap, PHP, and WordPress theming. Desktop software for a hotel, a supermarket, and a pharmacy came next.',
  },
  {
    when: '2017 – 2020',
    text: 'I built and ran Glimpsegist on my own, an entertainment blog with a voting platform. It taught me what happens to a site when real traffic arrives.',
  },
  {
    when: '2019 – 2022',
    text: 'I started a WordPress community in college, co-founded Repotecc, and led the Google Developer Student Club on campus. I learned that teaching something is the fastest way to understand it.',
  },
  {
    when: '2022 – now',
    text: 'Four years at Edubaloo building real-time exams, payments, and LLM pipelines. Now VectorLint at TinyRocket Labs, and financial workflows at BuySimply.',
  },
];

export default function Story() {
  return (
    <section className="container section story" id="story" aria-labelledby="story-title">
      <div className="story-intro">
        <p className="mono-label">The story so far</p>
        <h2 id="story-title">Self-taught first, then taught by production.</h2>
        <p>
          I wrote about the early part in{' '}
          <a href="https://medium.com/@ayomideonibokun/my-journey-to-becoming-a-developer-6f28f363313b">
            My journey to becoming a developer
          </a>
          .
        </p>
      </div>
      <ol className="story-list">
        {chapters.map(({ when, text }) => (
          <li key={when}>
            <p className="mono-label">{when}</p>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
