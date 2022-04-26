// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Player } from '../../utils/classes';

export default async function handler(req, res) {
  const { cat } = req.query;
  const player = new Player('David');
  console.log(player);
  res.status(200).send('Hola mundo!');
}
