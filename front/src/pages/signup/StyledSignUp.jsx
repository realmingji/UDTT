import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 75vh;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #1ca82a;
  flex-direction: column;
  background-color: white;
  align-items: center;

  label {
    margin-right: 4px;
    letter-spacing: 1px;
    align-items: center;
    font-size: 1rem;
  }

  input {
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
  }
  input[type='name']:invalid,
  input[type='password']:invalid,
  input[type='email']:invalid {
    border: 1px solid;
  }

  input[type='name']:valid,
  input[type='password']:valid,
  input[type='email']:valid {
    border: 1px solid green;
  }

  form:invalid {
    border: 3px solid;
  }
`;

export const Fieldset = styled.fieldset`
  text-transform: uppercase;
  border-style: none;
  width: 400px;
  margin: 0;
  padding: 0;
  border: none;
`;
export const RegisterButton = styled.button`
  height: 40px;
  border-radius: 5px;
  border-style: none;
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
