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

  div {
    display: flex;
    justify-content: space-between;

    button {
      margin-top: 10px;
      height: 30px;
      border: 0;
      background: transparent;
      background: #ff872c;
      border-radius: 4px;
      padding: 5px 15px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#ff872c')};
      }
    }
  }
`;

export const Table = styled.table`
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  border-collapse: collapse;

  table,
  th,
  td {
    border: 1px solid black;
  }

  th {
    height: 50px;
  }

  tbody {
    margin-top: 20px;
  }

  td {
    height: 30px;
    text-align: center;
    /* padding-left: 10px; */

    button {
      border: none;
      background: transparent;
    }
  }
`;
