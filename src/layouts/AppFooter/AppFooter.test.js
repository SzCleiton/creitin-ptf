import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import AppFooter from './AppFooter.vue';

describe('Componente AppFooter', () => {
  const fakeStore = createStore({
    getters: {
      getlanguageObject: () => ({
        footer: {
          copyright: 'Todos os direitos reservados.',
        },
      }),
    },
  });

  const mountOptions = {
    global: {
      plugins: [fakeStore],
      stubs: {
        'social-media': true,
      },
    },
  };

  it('deve renderizar o texto de copyright corretamente', () => {
    const wrapper = mount(AppFooter, mountOptions);
    expect(wrapper.text()).toContain('Todos os direitos reservados.');
  });

  it('deve ser um elemento footer', () => {
    const wrapper = mount(AppFooter, mountOptions);
    expect(wrapper.element.tagName).toBe('FOOTER');
  });
});