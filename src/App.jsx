import { useState } from 'react'
import person from './data'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = person[index]

  // const listPerson = person.map((list) => {
  //   const { id, name, job, image } = list
  //   return (
  //     <div>
  //       <h3>{name}</h3>
  //     </div>
  //   )
  // })

  function handleAdd() {
    if (index <= 4) {
      setIndex((prev) => prev + 1)
      return
    }
    return
  }
  function handleSub() {
    if (index > 0) {
      return setIndex((prev) => prev - 1)
    }
  }

  // const listItems = person[index].name
  console.log(name)
  return (
    <section>
      <h2>Reviews Starter</h2>

      <button type="button" style={{ padding: '0.5rem' }} onClick={handleAdd}>
        +
      </button>
      <button type="button" style={{ padding: '0.5rem' }} onClick={handleSub}>
        -
      </button>
    </section>
  )
}
export default App
