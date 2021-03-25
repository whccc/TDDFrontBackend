import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginCP from '../Components/Login';

describe('loginComponent', () => {
  it('validando carga del component', () => {
    render(<LoginCP />);
    expect(screen.queryByText(/Inicio Sesión/i)).toBeInTheDocument();
  });
  it('click', () => {
    const a = render(<LoginCP />);
    userEvent.click(screen.getByText('Iniciar'));

    expect(screen.queryByText('hola')).toBeNull();
  });
});
