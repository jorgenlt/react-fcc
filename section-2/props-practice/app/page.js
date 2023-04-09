import Joke from './Joke'
import jokesData from './jokesData'

export default function Home() {
  const jokeElements = jokesData.map(joke => {
    return (
      <Joke 
        setup={joke.setup}
        punchline={joke.punchline}
        key={joke.id}
      />
    )
  });

  return (
    <div className='container'>
      {jokeElements}
    </div>
  )
}
