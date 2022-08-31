import React from 'react';
import Checkbox from '../Components/Checkbox/Checkbox';
export default {
	title: "UI/Checkbox",
	component: Checkbox
}
export const withLabel = (args) => <Checkbox {...args}/>
withLabel.args ={
	label: 'My label',
	isChecked: true,
	id: 'my-checkbox'

}

export const withLongText = (args) => <Checkbox {...args} />
withLongText.args ={
	label: "Storybook helps you build UI components in isolation from your app's business logic, data, and context"
}
