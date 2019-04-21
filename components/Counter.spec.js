import {
  mount
} from '@vue/test-utils'
import Counter from './Counter.vue'

describe('Counter.vue', () => {
  test('Setup correctly', () => {
    expect(true).toBe(true)
  })
  test('Display component', () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toContain('Counter: 0')

  })
  // test('increments the counter value when button is clicked', () => {
  //   const wrapper = mount(Counter)
  //   //.prop('onClick')
  //   console.log(wrapper.find('button'))
  //   expect(wrapper.find('button').trigger('click')).toContain('Counter: 1')
  // })

  it('button click should increment the count', () => {
    const wrapper = mount(Counter)
    expect(wrapper.vm.counter).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.counter).toBe(1)
  })



})
