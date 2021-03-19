import { useState } from 'react';
import axios from 'axios';

const useUser = () => {
  const [DataUser, setDataUser] = useState('');
  const [ResultApi, setResultApi] = useState({});
  //-------------
  // CREATE USER
  //-------------
  const HookCreateUser = async () => {
    try {
      const ResultData = await axios.post(`${process.env.URL_API}/users`, {});
      console.log(ResultData);
    } catch (Error) {
      console.log(Error);
    }
  };
  return {};
};

export default useUser;
