import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterList from './CharacterList.jsx';

test('renders character list', () => {
  
  render(<CharacterList/>);
  const character1 = screen.getByText(/character 1/i);
  const character2 = screen.getByText(/CHARACTER 2/i);
  const character3 = screen.getByText(/Character 3/);

  expect(character1).toBeInTheDocument();
  expect(character2).toBeInTheDocument();
  expect(character3).toBeInTheDocument();
});

test('removes character when delete button is clicked', () => {
  render(<CharacterList />);
  const deleteButtons = screen.getAllByText('Delete');

  // se clickea el boton de eliminar al Character 1
  fireEvent.click(deleteButtons[0]);

  // Character 1 deveria desaparecer
  expect(screen.queryByText(/Character 1/i)).toBeNull();

  // Character 2 y Character 3 todavia deverian de estar
  expect(screen.getByText(/Character 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Character 3/i)).toBeInTheDocument();
});

test('adds new character',() =>{
  render(<CharacterList/>)

  //Se rellena las entradas de un nuevo character con 'Character 4'
  fireEvent.change(screen.getByPlaceholderText(/Character ID/i), { target: {value: '4'}});
  fireEvent.change(screen.getByPlaceholderText(/Character Name/i),{target: {value: 'Character'}});
  
  // se clickea el boton de agregar el Character nuevo
  fireEvent.click(screen.getByRole('button', {name: /Add Character/i}));

  // Obseva si el Character 4 agregado aparece en pantalla
  expect(screen.getByText(/Character 4/i)).toBeInTheDocument();
});