import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SearchBar from '../SearchBar.vue' // be careful the path is correct

describe('SearchBar Test', () => {
  it('should have a button with the text CHERCHER', () => {
    // Create the component virtually
    const wrapper = mount(SearchBar)
    
    // Find the button element
    const buton = wrapper.find('button')
    
    // Assert that the button text is "CHERCHER"
    expect(buton.text()).toBe('CHERCHER')
  })
})