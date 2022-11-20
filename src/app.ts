import express from 'express';
import RideRouter from './routes/ride.route';


const app = express();

app.use(express.json());

app.use('/rides', RideRouter);


app.listen(5000, () => {
  console.log('Server is running in port 5000');
});


