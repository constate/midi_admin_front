import { useEffect } from 'react';
import { getCustomerAuth } from './apis/auth/auth';

const getAuthData = async () => {
    const authData = await getCustomerAuth({
        user_id: 'test',
        user_pw: '1234',
    });
    console.log(authData);
};
const App = () => {
    useEffect(() => {
        getAuthData();
    }, []);

    return <div className="App"></div>;
};

export default App;
