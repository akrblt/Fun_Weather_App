import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import CloudlyScene from '@/components/scenes/CloudlyScene.vue'

// On simule Lottie pour éviter les erreurs de rendu
vi.mock('vue3-lottie', () => ({
  Vue3Lottie: { template: '<div class="mock-lottie"></div>' }
}))

describe('CloudlyScene', () => {
  it('affiche les 4 animations', () => {
    const wrapper = mount(CloudlyScene)
    
    // On vérifie qu'il y a bien 4 animations (nuages + bonshommes)
    const animations = wrapper.findAll('.mock-lottie')
    expect(animations.length).toBe(4)
  })

  it('possède les classes de calques', () => {
    const wrapper = mount(CloudlyScene)
    
    // On vérifie juste si les div de positionnement existent
    expect(wrapper.find('.cloud').exists()).toBe(true)
    expect(wrapper.find('.man').exists()).toBe(true)
  })
})