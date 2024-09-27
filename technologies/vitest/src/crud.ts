
type Usuario = {
  id: number;
  nombre: string;
  email: string;
};

let usuarios: Usuario[] = [];

export function crearUsuario(usuario: Usuario): Usuario {
  usuarios.push(usuario);
  return usuario;
}

export function leerUsuarios(): Usuario[] {
  return usuarios;
}

export function actualizarUsuario(id: number, nuevosDatos: Partial<Usuario>): Usuario | null {
  const index = usuarios.findIndex(usuario => usuario.id === id);
  if (index === -1) return null;

  usuarios[index] = { ...usuarios[index], ...nuevosDatos };
  return usuarios[index];
}

export function eliminarUsuario(id: number): Usuario[] {
  usuarios = usuarios.filter(usuario => usuario.id !== id);
  return usuarios;
}
