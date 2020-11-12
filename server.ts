import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import test from './routes/test';


const app: Application = express();
const PORT = process.env.PORT || 5000;

//middleware 
app.use(cors());
app.use(express.json());

// production build 
if (process.env.NODE_ENV === 'production') {
  // serve static content 
  app.use(express.static(path.join(__dirname, '/dist')))
}

/**
 * Routes
 */
app.use('/api/test', test);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
