import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'
import DisplayComp from '@/components/DisplayComp.vue'
import ButtonComp from '@/components/ButtonComp.vue'
import store from '@/store'

describe('App.vue', () => {
  it('renders the display component', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.findComponent(DisplayComp).exists()).toBe(true)
  })

  it('renders the button components', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [store]
      }
    })
    const buttonComponents = wrapper.findAllComponents(ButtonComp)
    expect(buttonComponents).toHaveLength(19)
  })

  it('handles button clicks correctly', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [store]
      }
    })

    // Click the '7' button
    const sevenButton = wrapper.findAllComponents(ButtonComp).filter(w => w.props('label') === '7')
    await sevenButton[0].trigger('click')
    expect(store.state.currentValue).toBe('7')

    // Click the '+' button
    const plusButton = wrapper.findAllComponents(ButtonComp).filter(w => w.props('label') === '+')
    await plusButton[0].trigger('click')
    expect(store.state.previousValue).toBe('7')
    expect(store.state.operation).toBe('+')
    expect(store.state.currentValue).toBe('0')

    // Click the '3' button
    const threeButton = wrapper.findAllComponents(ButtonComp).filter(w => w.props('label') === '3')
    await threeButton[0].trigger('click')
    expect(store.state.currentValue).toBe('3')

    // Click the '=' button
    const equalsButton = wrapper.findAllComponents(ButtonComp).filter(w => w.props('label') === '=')
    await equalsButton[0].trigger('click')
    expect(store.state.result).toBe(10)
  })
})

describe('DisplayComp.vue', () => {
  it('renders the current value and operation correctly', () => {
    store.state.currentValue = '5'
    store.state.previousValue = '3'
    store.state.operation = '+'
    const wrapper = shallowMount(DisplayComp, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.text()).toContain('3 + 5')
  })

  it('renders the result correctly', () => {
    store.state.result = '8'
    const wrapper = shallowMount(DisplayComp, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.text()).toContain('8')
  })
})

describe('ButtonComp.vue', () => {
  it('renders the button with the correct label and color', () => {
    const label = '7'
    const color = '3'
    const wrapper = shallowMount(ButtonComp, {
      props: { label, color }
    })
    expect(wrapper.text()).toBe('7')
    expect(wrapper.classes()).toContain('bg-[#9c9286]')
    expect(wrapper.classes()).toContain('hover:bg-[#b2a9a0]')
  })

  it('emits a click event when the button is clicked', async () => {
    const label = '7'
    const color = '3'
    const wrapper = shallowMount(ButtonComp, {
      props: { label, color }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})