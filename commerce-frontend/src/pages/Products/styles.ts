import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;

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
  }
`;
