import express from 'express';
import cors from 'cors';
import 'isomorphic-fetch';

const app = express();
app.use(cors());

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

let pc = {};
fetch(pcUrl)
  .then(async (res) => {
    pc = await res.json();
  })
  .catch(err => {
    console.log('Чтото пошло не так:', err);
  });

app.get('/', (req, res) => {
  res.json(pc);
});

app.get('/volumes', (req, res) => {
  const r = pc.hdd;
  if (r) {
  const disks = {};
  pc.hdd.map((item) => {
    if (disks[item.volume]) {
      disks[item.volume] += item.size;
    } else {
      disks[item.volume] = item.size;
    }
  });

  Object.keys(disks).forEach( (key) => {
    disks[key] += 'B';
  });

  res.json(disks);
  } else notFound(res);
});

app.get('/:item1', (req, res) => {
  const r = req.params;
  if (pc[r.item1]!==undefined) {
    const result = pc[r.item1];
    res.json(result);
  } else notFound(res);
});

app.get('/:item1/:item2', (req, res) => {
  const r = req.params;
  if (pc[r.item1]!==undefined  && pc[r.item1][r.item2]!==undefined && r.item2!=='length') {
  const result = pc[r.item1][r.item2];
  res.json(result);
  } else notFound(res);
});

app.get('/:item1/:item2/:item3', (req, res) => {
  const r = req.params;
  if (pc[r.item1]!==undefined  && pc[r.item1][r.item2]!==undefined && pc[r.item1][r.item2][r.item3]!==undefined && r.item3!=='length') {
  const result = pc[r.item1][r.item2][r.item3];
  res.json(result);
  } else notFound(res);
});

function notFound(res) {
  res.status(404).send('Not Found');
}

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

