
import Keypad from "../components/Keypad"
import "../styles/main.css"

export default {
  title: "Keypad",
  component: Keypad,
  argTypes: {
    onKeyPress: { action: "key pressed" },
  },
}

const Template = (args) => <Keypad {...args} />

export const Default = Template.bind({})
Default.args = {}