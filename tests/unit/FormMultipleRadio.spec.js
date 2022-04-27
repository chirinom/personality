import { mount } from '@vue/test-utils'
import FormMultipleRadio from '@/components/atoms/FormMultipleRadio.vue'

describe('FormMultipleRadio.vue', () => {
  it('title render passed!', async () => {
    const wrapper = mount(FormMultipleRadio)
    await wrapper.setProps({ title: 'title' })
    expect(wrapper.text()).toMatch('title')
  })

  it('Assert emit value passed!', async () => {
    const wrapper = mount(FormMultipleRadio)
    await wrapper.vm.$emit('input', true)
    expect(wrapper.emitted().input).toBeTruthy()
  })
})
