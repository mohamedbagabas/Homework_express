import { z, TypeOf } from 'zod';

export const rideSchema = z.object({
  body: z.object({
    
    id: z.string({ required_error: 'ID is required !' })
    .min(3, 'You name must be more than 2 char'),

    name: z
      .string({ required_error: 'name is required !' })
      .min(5, 'You name must be more than 4 char'),
    type: z
    .enum(['rollercoaster', 'thriller','water'], { required_error: 'major is required !' }),
  
    tickets: z
      .number({ required_error: 'ticket is required !' }),

    pric: z.number({ required_error: 'price is required !' }),

   
}),
});

export type RidesSchemaType = TypeOf<typeof rideSchema>['body'];