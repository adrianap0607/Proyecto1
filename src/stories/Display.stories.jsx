import Display from "../components/Display"
import "../styles/main.css"

export default {
  title: "Display",
  component: Display,
  argTypes: {
    value: {
      control: {
        type: "text",
      },
    },
  },
 decorators: [
  (Story) => (
    <div style={{ 
      width: "300px", 
      padding: "1rem", 
      background: "#fff7f3", 
      borderRadius: "10px", 
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
      <Story />
    </div>
  ),
],
}

const Template = (args) => <Display {...args} />

export const Default = Template.bind({})
Default.args = {
  value: "12345"
}
