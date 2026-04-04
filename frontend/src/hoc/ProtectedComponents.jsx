import { useAuth } from "../context/AuthContext"

export default function ProtectedComponents({children}) {
  
  return (
    <>
      {children}
    </>
  )
}
