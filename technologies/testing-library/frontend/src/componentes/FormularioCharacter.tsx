import React, { useState } from 'react';
import axios from 'axios';

interface CharacterFormProps {
  onSubmit: (character: Character) => void;
}

interface Character {
  name: string;
  characterClass: string;
  level: number;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [level, setLevel] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCharacter = {
      name,
      characterClass,
      level
    };

    try {
      const response = await axios.post('/api/characters', newCharacter);
      onSubmit(response.data);
      // Limpiar el formulario
      setName('');
      setCharacterClass('');
      setLevel(1);
    } catch (error) {
      console.error('Error creating character:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          id="name"
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="class" className="form-label">Class:</label>
        <input
          id="class"
          type="text"
          className="form-control"
          value={characterClass}
          onChange={(e) => setCharacterClass(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="level" className="form-label">Level:</label>
        <input
          id="level"
          type="number"
          className="form-control"
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
          min="1"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Create Character</button>
    </form>
  );
};

export default CharacterForm;
