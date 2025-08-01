import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ActionButton from './ActionButton.vue';

describe('Componente ActionButton', () => {
  it('deve renderizar o texto passado pela prop "text"', () => {
    const buttonText = 'Clique em mim';

    const wrapper = mount(ActionButton, {
      props: {
        text: buttonText,
      },
    });

    expect(wrapper.text()).toBe(buttonText);
  });

  it('deve emitir um evento "buttonClick" quando clicado', async () => {
    const wrapper = mount(ActionButton, {
      props: { text: 'Emitir Evento' },
    });

    await wrapper.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('buttonClick');
    
    expect(wrapper.emitted('buttonClick')).toHaveLength(1);
  });

  it('deve estar desabilitado quando a prop "disabled" for true', () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: 'Botão Desabilitado',
        disabled: true,
      },
    });

    expect(wrapper.attributes('disabled')).toBeDefined();
  });
  
  it('NÃO deve emitir um evento "buttonClick" se estiver desabilitado', async () => {
      const wrapper = mount(ActionButton, {
          props: {
              text: 'Não Clicável',
              disabled: true
          }
      });
      
      await wrapper.trigger('click');
      
      expect(wrapper.emitted().buttonClick).toBeUndefined();
  });
});