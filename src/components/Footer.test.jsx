import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Footer from './Footer';

describe('Componente Footer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    const mockDate = new Date(2025, 0, 15);
    vi.setSystemTime(mockDate);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('deve renderizar o texto de copyright com o ano atual (mockado)', () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/2025 Cleiton Souza. Todos os direitos reservados./i);

    expect(copyrightText).toBeInTheDocument();
  });

  it('deve renderizar o link para o GitHub com o atributo href correto', () => {
    render(<Footer />);

    const githubLink = screen.getByRole('link', { name: /Visite meu GitHub/i });

    expect(githubLink).toBeInTheDocument();
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/SzCleiton');
  });

});