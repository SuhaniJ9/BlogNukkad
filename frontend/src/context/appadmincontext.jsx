import { useRouter } from "next/navigation";
import { createContext, useState, useContext } from "react";

const Appcontext = createContext();

export const AppProvider = ({ children }) => {
    const router = useRouter();

    const[currentAdmin, setCurrentAdmin] = useState(
        JSON.parse(sessionStorage.getItem("Admin"))
    );
    const[loggedIn, setLoggedIn] = useState(currentAdmin !== null);
  const logout = () => {
    setCurrentAdmin(null);
    sessionStorage.removeItem("Admin");
    setLoggedIn(false);
    router.push("/");

};

return (
    <Appcontext.Provider value=
    {{ currentAdmin, setCurrentAdmin, loggedIn, setLoggedIn, logout }}>
    {children}
    </Appcontext.Provider>
)
};

const useAppContext = () => useContext(Appcontext);
export default useAppContext;