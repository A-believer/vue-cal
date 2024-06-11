import { shallowMount } from '@vue/test-utils'
import ButtonComp from '@/components/ButtonComp.vue'

const factory = () => {
    const label = "7"
    const color = "3"
    return shallowMount(ButtonComp, {
        props: { label, color }
    });
}

describe('ButtonComp.vue', () => {
  it('renders the button with the correct label and color', () => {
    const wrapper = factory()
    expect(wrapper.text()).toBe('7')
    expect(wrapper.classes()).toContain('bg-[#9c9286]')
    expect(wrapper.classes()).toContain('hover:bg-[#b2a9a0]')
  })

  it('emits a click event when the button is clicked', async () => {
    const wrapper = factory()
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})