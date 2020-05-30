/* eslint-disable no-console */
import express from 'express';

const app = express();

app.use(express.json());

app.listen(3001, () => {
  console.log('Server is runing on port 3001');
});
