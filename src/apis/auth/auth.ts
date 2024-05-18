import axios from 'axios';

const MIDI_SERVER: string =
    process.env.REACT_APP_MIDI_SERVER || 'http://localhost:4000';

const getCustomerAuth = async (sendJson: {
    user_id: string;
    user_pw: string;
}) => {
    const { user_id, user_pw } = sendJson;
    console.log(sendJson);
    const { data } = await axios.get(
        `${MIDI_SERVER}/auth?user_id=${user_id}&user_pw=${user_pw}`,
    );
    return data;
};

const postCreateCustomer = () => {};

export { getCustomerAuth };
