/**
 * Created by Dmitriy Prilutsky on 10.11.2016.
 */

export default function canonize(url) {
  const re = new RegExp('@?\/*(https:)?(\/\/)?(([a-zA-Z0-9.])[^\/]*\/)?([a-zA-Z0-9.]*)');
  const username = url.match(re)[5];
  return username
}
