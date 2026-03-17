import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import RainyScene from '@/components/scenes/RainyScene.vue'

// On simule Lottie pour éviter les erreurs de rendu
vi.mock('vue3-lottie', () => ({
  Vue3Lottie: { template: '<div class="mock-lottie"></div>' }
}))

describe('RainyScene', () => {
  it('affiche les 3 animations de pluie', () => {
    const wrapper = mount(RainyScene)
    
    // On compte les animations (Pluie + Femme + Coureur)
    const animations = wrapper.findAll('.mock-lottie')
    expect(animations.length).toBe(3)
  })

  it('possède la classe d’atmosphère pluvieuse', () => {
    const wrapper = mount(RainyScene)
    
    // Vérifie que le style global "rainy" est appliqué
    expect(wrapper.classes()).toContain('rainy-atmosphere')
  })
})