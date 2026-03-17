import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import SunnyScene from '@/components/scenes/SunnyScene.vue'

// Simulation de Lottie pour éviter les erreurs de rendu
vi.mock('vue3-lottie', () => ({
  Vue3Lottie: { template: '<div class="mock-lottie"></div>' }
}))

describe('SunnyScene', () => {
  it('affiche les 5 animations (soleil, enfants et 3 papillons)', () => {
    const wrapper = mount(SunnyScene)
    
    // On compte toutes les instances de Vue3Lottie
    const animations = wrapper.findAll('.mock-lottie')
    expect(animations.length).toBe(5)
  })

  it('contient les calques de positionnement spécifiques', () => {
    const wrapper = mount(SunnyScene)
    
    // On vérifie que les conteneurs existent bien
    expect(wrapper.find('.sun').exists()).toBe(true)
    expect(wrapper.find('.butterfly').exists()).toBe(true)
    expect(wrapper.find('.kids').exists()).toBe(true)
  })
})