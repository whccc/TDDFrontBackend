import { screen, render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import CPTesting from '../Components/Testing';

describe('prueba componente testing', () => {
  it('validando contenido componente titulo', () => {
    render(<CPTesting />);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  it('validando input contenido', () => {
    render(<CPTesting />);
    expect(screen.getByPlaceholderText(/Email/i).value).toBe('');
  });

  it('validando campos formulario que no esten vacios', () => {
    render(<CPTesting />);
    userEvent.click(screen.getByText(/Enviar información/i));
    expect(screen.getByTestId('Message').innerHTML).toBe('Error input vacio');
  });
});
