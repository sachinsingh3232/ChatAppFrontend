import React from 'react'
import {
    Container,
    Box,
    Text, Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react'

import Login from '../../Components/Authentication/Login'
import SignUp from '../../Components/Authentication/SignUp'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const HomePage = () => {
    const navigate = useNavigate();
    // const [user, setUser] = useState();
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        // setUser(userInfo);
        if (userInfo) navigate('/chatPage');
    }, [navigate])

    return (
        <Container maxW='xl' centerContent>
            <Box display="flex" justifyContent="center" padding={3} background={'white'} w={"100%"} margin={"40px 0 15px 0"} borderRadius={"1g"} borderWidth={"1px"}>
                <Text fontSize={"4xl"} color={"black"} fontFamily={"word sans"}>ChatApp</Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                <Tabs isFitted variant="soft-rounded">
                    <TabList mb="1em">
                        <Tab>Login</Tab>
                        <Tab>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <SignUp />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default HomePage