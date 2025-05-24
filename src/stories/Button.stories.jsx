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
};

export const Numero = Template.bind({});
Numero.args = {
    label: "5",
    className: ""
};

export const Operacion = Template.bind({});
Operacion.args = {
    label: "+",
    className: "operation"
};

export const Igual = Template.bind({});
Igual.args = {
    label: "=",
    className: "equal"
};

export const Borrar = Template.bind({});
Borrar.args = {
    label: "CLR",
    className: "equal"
};