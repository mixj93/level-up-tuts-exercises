import { Form, Field } from '@leveluptuts/fresh'

const HabbitForm = ({ setHabbits }) => {
  return (
    <Form
      onSubmit={(data) => {
        console.log(data)
        setHabbits((prevState) => [...prevState, data.habbit])
      }}
    >
      <Field>Habbit</Field>
    </Form>
  )
}

export default HabbitForm
