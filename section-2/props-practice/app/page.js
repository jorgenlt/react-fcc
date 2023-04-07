import Joke from './Joke'

export default function Home() {
  return (
    <div className='container'>
      <Joke 
        setup='How did the hacker escape the police?'
        punchline='He just ransomware!'
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline='Scurvy.'
      />
      <Joke 
        setup='Why do bees stay in the hive in the winter?'
        punchline='Swarm.'
      />
      <Joke 
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </div>
  )
}
