var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODFhZjExMDE1OGRjNzAwMTJkNzExYWQiLCJ1c2VybmFtZSI6ImRwcmlseUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTQ3ODMzNjgzMH0.mGEeB0bDByVY6HC6jryHV5ZSZmsRjcSgpjvuq0z-C4o';
var skb = new Skb(token);
skb.taskHelloWorld('Hello SkillBranch');