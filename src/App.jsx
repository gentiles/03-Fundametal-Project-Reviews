import { useState } from 'react'
import reviews from './data'

const App = () => {
  const [person, setPerson] = useState(reviews)

  const listPerson = person.map((list) => {
    const { id, name, job, image } = list
    return (
      <div>
        <h3>{name}</h3>
      </div>
    )
  })

  return (
    <section>
      <h2>Reviews Starter</h2>
      {listPerson}
    </section>
  )
}
export default App
