import styled from 'styled-components';

export const LoginTitle = styled.div`
  font-size: 20px;
  text-align: center;
  color: #1ca82a;
  padding: 50px;
`;

export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  width: 100%;
`;
export const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px #1ca82a solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormFieldset = styled.fieldset`
  text-transform: uppercase;
  border-style: none;
  width: 400px;
  margin: 0;
  padding: 0;
  border: none;
`;

export const FormLabel = styled.label`
  letter-spacing: 3px;
  font-size: 1rem;
`;

export const FormInput = styled.input`
  width: 50%;
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  padding: 5px 0px;
  text-indent: 6px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 0.9rem;
  letter-spacing: 2px;
`;

export const FormSubmitButton = styled.button`
  border-style: none;
  border-radius: 5px;
  background-color: #1ca82a;
  color: white;
  padding: 8px 20px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  display: block;
  margin-top: 10px;
  cursor: pointer;
`;

export const FormErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 10px;
`;
