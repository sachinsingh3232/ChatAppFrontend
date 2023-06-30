import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const chatContext = createContext();
const ChatProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [chats, setChats] = useState();
    const [selectedChat, setSelectedChat] = useState();
    const [notification, setNotification] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);
        if (!userInfo) navigate('/');
    }, [navigate])

    return <chatContext.Provider value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
    }}>{children}</chatContext.Provider>
};

export const ChatState = () => {
    return useContext(chatContext);
}

export default ChatProvider