import { render, screen } from '@testing-library/react';
import App from '../pages/App';

describe('Testando página inicial', () => {
  it('Verifica se o texto inicial é carregado', () => {
    render(<App />);
    const name = screen.getByRole('heading', { 
      name: /João Marques/i
    })

    expect(name).toBeInTheDocument();
  })
})
