import MyButton from "../Components/Checkbox/Button";

export default{
	title: 'UI/Button',
	component: MyButton,
	argTypes: {
		variant: {
			type: 'string',
			description: 'Вариант внешнего вида кнопки',
			defaultValue: 'contained',
			options: ['text', 'contained', 'outlined'],
			control: {
				type: 'radio'
			}
		},
		size: {
			type: 'string',
			description: 'Вариант размера кнопки',
			defaultValue: 'medium',
			options: ['small', 'medium', 'large'],
			control: {
				type: 'radio'
			}
		},
		color: {
			type: 'string',
			description: 'Вариант цвета кнопки',
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'success', 'error'],
			control: {
				type: 'radio'
			}
		},
		children: {
			type: 'string',
			name: 'label',
			defaultValue: 'Click me'
		},
		// type: {
		// 	type: 'string',
		// description: 'Тип кнопки',
		// defaultValue: 'button',
		// options: ['button', 'submit'],
		// control: {
		// 	type: 'radio'
		// }
		// }
	}
}
const Template = (args) => <MyButton {...args} />

export const defaultButton = Template.bind({})
defaultButton.args = {
	children: 'Press me',
	variant: 'contained'
}
export const largeButton = Template.bind({});
largeButton.args ={
	children: 'large',
	size: 'large',
	variant: 'text'
}
