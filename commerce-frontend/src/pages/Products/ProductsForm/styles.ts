import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;

  background-color: #fff;
  margin-top: 50px;
  -webkit-box-shadow: 5px 5px 0 -2px #cfcfcf, 5px 5px 0 0 #eaeaea;
  -moz-box-shadow: 5px 5px 0 -2px #cfcfcf, 5px 5px 0 0 #eaeaea;
  box-shadow: 5px 5px 0 -2px #cfcfcf, 5px 5px 0 0 #eaeaea;

  h1 {
    margin-bottom: 15px;
  }

  button {
    margin-top: 10px;
    height: 30px;
    border: 0;
    margin-top: 15px;
    background: transparent;
    border-radius: 4px;
    padding: 5px 15px;
    transition: background-color 0.2s;

    + button {
      margin-left: 10px;
    }
  }

  .submitButton {
    background: #ff872c;

    &:hover {
      background-color: ${shade(0.2, '#ff872c')};
    }
  }

  .cancelButton {
    background: #959696;

    &:hover {
      background-color: ${shade(0.2, '#959696')};
    }
  }
`;
