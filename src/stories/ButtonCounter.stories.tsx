import { Counter } from "./../../app/components/counter";

export default {
    title: 'Counter/Counter',
    component: Counter,
    argTypes: {
        buttonStyleVersion: {
            control: 'select',
            options: ['counter-button1','counter-button2','counter-button3' ]
        },
        backgroundColor: {control: 'color'},
        onClick: {action: 'clicked'}
    },
    tags: ["autodocs"],
}

// story where the button size is small

export const Default = {
    args: { 
        size: 'default',
        label: 'Click me'
    }
}

// story where the button size is large 

export const Large = {
    args: { 
        size: 'large',
        label: 'Click me'
    }
}

// story where the button size is small

export const Small = {
    args: { 
        size: 'small',
        label: 'Click me'
    }
}

