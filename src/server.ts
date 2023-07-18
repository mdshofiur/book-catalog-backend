import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';


let server: Server;

async function run() {
  try {
    await mongoose.connect("mongodb+srv://testingDatabase:LmlkuPM6zWk6hdW5@cluster0.e7yhr.mongodb.net/cow-hurt?retryWrites=true&w=majority" as string);
    console.log(`Database is connected successfully`);

    server = app.listen(1000, () => {
      console.log(`Application  listening on port 1000`);
    });
  } catch (err) {
    console.log('Failed to connect database', err);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

run();



























// import mongoose from 'mongoose';
// import app from './app';

// const port: number = 2000;
// const uri: string = "mongodb+srv://testingDatabase:LmlkuPM6zWk6hdW5@cluster0.e7yhr.mongodb.net/cow-hurt?retryWrites=true&w=majority"


// app.listen(port, async () => {
//    try {
//       await mongoose.connect(uri);
//       console.log('Database is connected');
//       console.log(`Example app listening on port ${port}`);
//    } catch (error) {
//       console.log('Database connect error', error);
//    }
// });
