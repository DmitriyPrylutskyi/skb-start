import express from 'express';
import cors from 'cors';
import canonize from './canonize';
const app = express();
app.use(cors());
app.get('/', (req, res) => {
  const fullname = canonize(req.query.fullname);
  res.send(fullname[0]+fullname[1]+fullname[2]);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
