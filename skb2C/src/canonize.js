/**
 * Created by Dmitriy Prilutsky on 10.11.2016.
 */

export default function canonize(username) {
  const re = new RegExp('@?\/*(https:)?(http:)?(\/\/)?(([a-zA-Z0-9.])[^\/]*\/)?(@)?([a-zA-Z0-9.@_]*)');
  const result = username.match(re)[7];
  username = result == ''?'Invalid username':'@'+result;
  console.log(username);
  return username
}
