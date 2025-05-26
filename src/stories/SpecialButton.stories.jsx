import SpecialButton from "../components/SpecialButton"
import "../styles/main.css"

/* eslint-disable no-unused-vars */
export default {
  title: "SpecialButton",
  component: SpecialButton,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    onClick: {
      action: "clicked"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100px", height: "100px" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args) => <SpecialButton {...args} />

export const Igual = Template.bind({})
Igual.args = { label: "=" }

export const Borrar = Template.bind({})
Borrar.args = { label: "DEL" }

export const Limpiar = Template.bind({})
Limpiar.args = { label: "CLR" }
