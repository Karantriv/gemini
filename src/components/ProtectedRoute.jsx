import { Navigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
} 