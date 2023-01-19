import * as dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen(port, () => console.log(`Server is listening on ${port}...`));
  } catch (err) {
    console.log(err);
  }
};
