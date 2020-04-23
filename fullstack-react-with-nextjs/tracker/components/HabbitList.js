import Habbit from './Habbit'

const HabbitList = ({ habbits }) => {
  return (
    <section>
      <h2>My Habbits</h2>
      {habbits.map((habbit, index) => (
        <Habbit key={habbit} habbit={habbit} index={index} />
      ))}
    </section>
  )
}

export default HabbitList
