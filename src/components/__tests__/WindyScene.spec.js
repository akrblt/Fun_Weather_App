import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import WindyScene from '@/components/scenes/WindyScene.vue'

// Simulation de Lottie pour éviter les erreurs de rendu
vi.mock('vue3-lottie', () => ({
  Vue3Lottie: { template: '<div class="mock-lottie"></div>' }
}))

describe('WindyScene', () => {
  it('affiche les 8 animations (3 vents, 2 personnes, 3 drapeaux)', () => {
    const wrapper = mount(WindyScene)
    
    // On compte toutes les instances de Vue3Lottie
    const animations = wrapper.findAll('.mock-lottie')
    expect(animations.length).toBe(8)
  })

  it('vérifie la présence des calques de vent et de drapeaux', () => {
    const wrapper = mount(WindyScene)
    
    // On s'assure que les conteneurs sont bien là
    expect(wrapper.find('.wind').exists()).toBe(true)
    expect(wrapper.find('.flag').exists()).toBe(true)
    expect(wrapper.find('.person').exists()).toBe(true)
    expect(wrapper.find('.person1').exists()).toBe(true)
  })
})