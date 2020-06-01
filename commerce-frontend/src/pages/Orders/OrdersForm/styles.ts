import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  margin-top: 50px;

  div {
    display: flex;
    justify-content: space-between;

    button {
      margin-top: 10px;
      height: 30px;
      border: 0;
      background: transparent;
      background: #d08655;
      border-radius: 4px;
      padding: 5px 15px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#d08655')};
      }
    }
  }

  /* Alterar isso depois */
  form {
    .react-select__control {
      width: 100% !important;
    }
  }
`;
