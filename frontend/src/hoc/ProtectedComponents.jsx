import { useAuth } from "../context/AuthContext"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spiner from "../components/ui/Spiner";

export default function ProtectedComponents({children}) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth/login');
    }
  }, [loading, user]);

  if (loading) return <div className="flex items-center justify-center h-64"><Spiner/></div>;

  if (!user) return null;

  return (
    <>
      {children}
    </>
  )
}
