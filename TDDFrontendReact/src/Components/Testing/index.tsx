import React, { useState } from 'react';

const CPLogin = () => {
  const [strMessage, setStrMessage] = useState('');
  const [Email, setEmail] = useState('');
  const ValidarForm = (e: any) => {
    e.preventDefault();
    if (Email === '') {
      setStrMessage('Error input vacio');
    }
  };
  return (
    <form>
      <h1>Login</h1>
      <input type="text" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={ValidarForm} type="button">
        Enviar información
      </button>
      <p data-testid="Message">{strMessage}</p>
    </form>
  );
};

export default CPLogin;
