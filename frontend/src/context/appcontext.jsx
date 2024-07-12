import { useRouter } from "next/navigation";
import { createContext, useState, useContext } from "react";

const Appcontext = createContext();

export const AppProvider = ({ children }) => {
    const router = useRouter();

    const[currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("user"))
    );
    const[loggedIn, setLoggedIn] = useState(currentUser !== null);
  const logout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem("user");
    setLoggedIn(false);
    router.push("/");

};

return (
    <Appcontext.Provider value=
    {{ currentUser, setCurrentUser, loggedIn, setLoggedIn, logout }}>
    {children}
    </Appcontext.Provider>
)
};

const useAppContext = () => useContext(Appcontext);
export default useAppContext;