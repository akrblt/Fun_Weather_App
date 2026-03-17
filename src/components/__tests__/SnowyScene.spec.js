import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import SnowyScene from '@/components/scenes/Snowyscene.vue'

// On simule Lottie pour éviter les erreurs de rendu graphique
vi.mock('vue3-lottie', () => ({
  Vue3Lottie: { template: '<div class="mock-lottie"></div>' }
}))

describe('SnowyScene', () => {
  it('affiche les 4 animations de neige et personnages', () => {
    const wrapper = mount(SnowyScene)
    
    // On vérifie qu'il y a bien 4 animations au total
    const animations = wrapper.findAll('.mock-lottie')
    expect(animations.length).toBe(4)
  })

  it('contient les calques de positionnement spécifiques', () => {
    const wrapper = mount(SnowyScene)
    
    // On vérifie que les classes CSS de placement existent
    expect(wrapper.find('.snow').exists()).toBe(true)
    expect(wrapper.find('.homme').exists()).toBe(true)
  })
})