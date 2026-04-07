import 'dotenv/config';
import express from 'express';
import { safelaunch } from '@safelaunch/sdk-node';

const app = express();

app.use(safelaunch({
  projectKey: process.env.SAFELAUNCH_PROJECT_KEY
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
