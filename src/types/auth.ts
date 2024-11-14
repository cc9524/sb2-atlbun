export interface User {
  id: string;
  username: string;
  role: 'student' | 'trainee';
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}