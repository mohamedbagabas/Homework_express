import express from 'express';
import validate from '../middleware/validate';
import {rideSchema,RidesSchemaType,} from '../zod_schema/ride.schema';

const router = express.Router();

 let rides: RidesSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.json(rides);
});

router.post('/', validate(rideSchema), (req, res, next) => {
  const newride= req.body as RidesSchemaType;

  rides.push(newride);
  return res.status(201).json({ message: 'Rides Added !' });
});



router.put(`/:id`, validate(rideSchema),(req, res) => {
    const updatedride = req.body as RidesSchemaType;
    const { id } = req.params;
    const updatedridesList = rides.filter((uride:any) => {
      return uride.id !== id;
    });
    updatedridesList.push(updatedride);
    rides = updatedridesList;
    res.json({
      message: "Name Update",
    });
  });
  
  router.delete(`/:id`,validate(rideSchema), (req, res) => {
    const deletedride = req.body as RidesSchemaType;
    const { id } = req.params;
    const deletedrideList = rides.filter((dride:any) => {
      return dride.id !== id;
    });
    rides = deletedrideList;
    res.json({
      message: "Name Delete",
    });
  });

export default router;