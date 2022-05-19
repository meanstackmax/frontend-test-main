import CardComponent from "./CardComponent"

const Template = (args) => <CardComponent {...args} />

export default {
  component: CardComponent,
  title: "Flood zone 3"
}

export const Default = Template.bind({})

Default.args = {
  title: "Flood zone 3"
}

export const Hover = Template.bind({})

Hover.args = {
  ...Default.args,
  defaultHover: true
}

export const Selected = Template.bind({})

Selected.args = {
  ...Default.args,
  condition: "selected",
  defaultSelected: true
}
