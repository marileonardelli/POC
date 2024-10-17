import React, { useState, useEffect } from 'react';
import {act} from '@testing-library/react';
import FormularioCharacter from './componentes/FormularioCharacter';
import axios from 'axios';

interface Character {
  id: string;
  name: string;
  characterClass: string;
  level: number;
}

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [message, setMessage] = useState<string | null>(null); // Para el mensaje del botón

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('/api/characters');
      act(() => {
        setCharacters(response.data);
      })
    } catch (error) {
      console.error('Error :', error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleCharacterSubmit = (newCharacter: Omit<Character, 'id'>) => {
    const newCharacterWithId = { ...newCharacter, id: Date.now().toString() };
    setCharacters([...characters, newCharacterWithId]);
  };

  const handleShowMessage = () => {
    setMessage('Character agregado!'); // Mensaje de éxito

  };

  return (
    <div className="container mt-4">
      <h1>Formulario para Agregar Character</h1> {/* Título agregado */}
      
      <FormularioCharacter onSubmit = {handleCharacterSubmit} />
      <button className="btn btn-secondary mb-3" onClick={handleShowMessage}>
        Show Success Message
      </button>
      {message && <div className="alert alert-success">{message}</div>} {/* Mensaje de éxito */}

      <h2>Character List</h2>
      <ul className="list-group">
        {characters.map((character) => (
          <li key={character.id} className="list-group-item">
            {character.name} (Class: {character.characterClass}, Level: {character.level})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
