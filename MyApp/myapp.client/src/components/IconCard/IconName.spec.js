import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import IconName from "./IconName.vue";

test('name prop works', () => {
  const wrapper = mount(IconName, {
    propsData: {
      name: 'Exclam'
    }
  })
  expect(wrapper.props().name).toBe('Exclam')
})

test('snapshot', () => {
  const wrapper = mount(IconName, {
    propsData: {
      name: 'Exclam'
    }
  })
  expect(wrapper.text()).toMatchSnapshot()
})
