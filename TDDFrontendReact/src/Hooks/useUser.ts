import { useState } from 'react';
import axios from 'axios';
import { IUser } from '../Interfaces/UserInterface';

const useUser = () => {
  // const [DataUser, setDataUser] = useState('');
  const [ResultApi, setResultApi] = useState({});
  //-------------
  // CREATE USER
  //-------------
  const HookCreateUser = async (DataUser: IUser) => {
    try {
      const ResultData = await axios.post(`${process.env.REACT_APP_URL_API}/users`, DataUser);
      setResultApi(ResultData.data);
    } catch (Error) {
      console.error('Error internal service ');
    }
  };
  //-------------
  // LOGIN USER
  //------------
  const HookLoginUser = async (DataUser: IUser) => {
    try {
      const ResultData = await axios.post(`${process.env.REACT_APP_URL_API}/users/ValidateLogin`, DataUser);
      return ResultData.data.data.ValidateUserLogin;
    } catch (Error) {
      console.error('Error internal service');
      return false;
    }
  };
  return { HookCreateUser, HookLoginUser, ResultApi };
};

export default useUser;
