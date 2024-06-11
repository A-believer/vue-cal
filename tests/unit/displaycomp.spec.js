import store from '@/store'
import { shallowMount } from '@vue/test-utils'
import DisplayComp from '@/components/DisplayComp.vue'


const factory = () => {
return shallowMount(DisplayComp, {
      global: {
        plugins: [store]
      }
    })
}

describe('DisplayComp.vue', () => {
  it('renders the current value and operation correctly', () => {
    store.state.currentValue = '5'
    store.state.previousValue = '3'
    store.state.operation = '+'
    const wrapper = factory()
    expect(wrapper.text()).toContain('3 + 5')
  })

  it('renders the result correctly', () => {
    store.state.result = '8'
    const wrapper = factory()
    expect(wrapper.text()).toContain('8')
  })
})