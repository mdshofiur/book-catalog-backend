import mongoose from 'mongoose';
import app from './app';

const port: number = 2000;
// const uri: any = process.env.DB_URL || 'mongodb://localhost:27017/firstdb';
const uri: any = "mongodb+srv://testingDatabase:LmlkuPM6zWk6hdW5@cluster0.e7yhr.mongodb.net/cow-hurt?retryWrites=true&w=majority"

app.listen(port, async () => {
   try {
      await mongoose.connect(uri);
      console.log('Database is connected');
      console.log(`Example app listening on port ${port}`);
   } catch (error) {
      console.log('Database connect error', error);
   }
});
