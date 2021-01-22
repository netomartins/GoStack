import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloworld(request: Request, response: Response) {
  const user = createUser({
    email: 'neto@hotmail.com',
    password: '12345',
    techs: [
      'NodeJs',
      'ReactJs',
      'React Native',
      {title: 'Javascript', experience:100},
      
    ],
  });

  return response.json({ message: 'Hello Neto' });
}
