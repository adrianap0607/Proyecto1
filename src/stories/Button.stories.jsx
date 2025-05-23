import Button from "../components/Button";

import "../styles/main.css";

export default {
    title: "Button",
    component: Button,
    decorators: [
        (Story) => (
            <div style={{ width: "100px", height: "100px"}}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        label: {
        control: {
            type: "text",
        },
        },
        onClick: {
        action: "clicked",
        },
    },
}

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Hola"
}