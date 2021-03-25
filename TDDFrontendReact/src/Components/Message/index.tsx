import Alert from 'react-bootstrap/Alert';
import React from 'react';

const CPMessage = ({ isActive, variant, strMessage }: { isActive: boolean; variant: string; strMessage: string }) =>
  isActive ? <Alert variant={variant}>{strMessage}</Alert> : null;
export default CPMessage;
