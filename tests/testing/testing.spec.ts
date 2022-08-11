import Testing from "@/testing/testing.vue"
import { mount } from '@vue/test-utils'

it("Should be ok", async () => {
    const wrapper = mount(Testing)

    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain(1)
})
