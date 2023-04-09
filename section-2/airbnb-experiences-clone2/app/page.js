import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import data from './data'

export default function Home() {
  const experienceElements = data.map(d => {
    return (
      <Card 
      key={d.id}
      soldOut={d.openSpots == 0 ? true : false}
      {...d}
      />
    )
  })
  return (
    <div id='container'>
      <div id='wrapper'>
        <Navbar />
        <Hero />
        <div className='cards'>
          {experienceElements}
        </div>
      </div>
    </div> 
  )
}
