import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
<<<<<<< HEAD
  console.log("Starting up auth service....");
=======
  console.log('Starting up auth service... test auth depo');
>>>>>>> 3e4e3c9 (Test auth deployment on merge)
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to mongodb');
  } catch (err) {
    console.error(err);
  }
  app.listen(3000, () => {
    console.log('Listening on port 3000...!!!!');
  });
};

start();
