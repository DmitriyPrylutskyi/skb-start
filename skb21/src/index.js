import express from 'express';
import cors from 'cors';
import canonize from './canonize';
const app = express();
app.use(cors());
app.get('/', (req, res) => {
  const username = '@'+canonize(req.query.url);
  res.json({
    url: req.query.url,
    username,
  });
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

/*const array = [
  'https://vk.com/igor.suvorov',
  'https://twitter.com/suvorovigor',
  'https://telegram.me/skillbranch',
  '@skillbranch',
  'https://telegram.me/skillbranch',
  'https://vk.com/skillbranch?w=wall-117903599_1076'
  ];

array.forEach(url => {
  const username = canonize(url);
  console.log('@'+username);
})*/


