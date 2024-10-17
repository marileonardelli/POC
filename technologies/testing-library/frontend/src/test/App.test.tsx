import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from '../App';
import axios from 'axios';

jest.mock('axios'); 

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('App Component', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce({ data: [] }); 
  });

  test('renders title and button', async () => {
    render(<App />);
    
    //@ts-ignore
    expect(screen.getByText(/Formulario para Agregar Character/i)).toBeInTheDocument();
    
    //@ts-ignore
    expect(screen.getByRole('button', { name: /Show Success Message/i })).toBeInTheDocument();
  });

  test('shows success message when button is clicked', async () => {
    render(<App />);

    
    fireEvent.click(screen.getByRole('button', { name: /Show Success Message/i }));

    //@ts-ignore
    expect(await screen.findByText(/Character agregado!/i)).toBeInTheDocument();
  });
});
