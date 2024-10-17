import { render, screen, fireEvent } from '@testing-library/react';
import FormularioCharacter from '../componentes/FormularioCharacter';

test('submits the form with correct data', () => {
  const handleSubmit = jest.fn();
  
  render(<FormularioCharacter onSubmit={handleSubmit} />);
  
  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Luke Skywalker' } });
  fireEvent.change(screen.getByLabelText(/Class/i), { target: { value: 'Jedi' } });
  fireEvent.change(screen.getByLabelText(/Level/i), { target: { value: 10 } });
  
  fireEvent.click(screen.getByText(/Create Character/i));
  
  expect(handleSubmit).toHaveBeenCalledWith({
    name: 'Luke Skywalker',
    characterClass: 'Jedi',
    level: 10,
  });
});
