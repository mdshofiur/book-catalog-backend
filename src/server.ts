import mongoose from 'mongoose';
import app from './app';
import bookRouter from './modules/books/books.route';


const port: number = 2000;
const uri: string = "mongodb+srv://testingDatabase:LmlkuPM6zWk6hdW5@cluster0.e7yhr.mongodb.net/cow-hurt?retryWrites=true&w=majority"

app.use('/api/books', bookRouter);


app.listen(port, async () => {
   try {
      await mongoose.connect(uri);
      console.log('Database is connected');
      console.log(`Example app listening on port ${port}`);
   } catch (error) {
      console.log('Database connect error', error);
   }
});
