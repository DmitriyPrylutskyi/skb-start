/**
 * Created by Dmitriy Prilutsky on 10.11.2016.
 */

export default function canonize(fullname) {
  let lastname = 'Invalid fullname';
  let firstname = '';
  let middlename = '';

  const re = new RegExp('(\\s*[W\\S]*)(\\s*[W\\S]*)?(\\s*[W\\S]*)?(\\s*[W\\S]*)?');
  const dig = new RegExp('[^\\d_/]*');

  if (fullname.match(re)[4] !== undefined | fullname.match(re)[0] === '') return [lastname, firstname, middlename];

  fullname = fullname.replace(/(\s*[W\S]*)(\s*[W\S]*)?(\s*[W\S]*)?(\s*[W\S]*)?/i, "$3 $1$2");

  if (fullname.match(re)[3] === undefined) fullname = fullname.replace(/(\s*[W\S]*)(\s*[W\S]*)?/i, "$2 $1");

  lastname = camelcase(nospace(fullname.match(re)[1]));
  console.log(fullname.match(re)[2]);
  firstname = (fullname.match(re)[2] !== undefined)?camelcase(nospace(fullname.match(re)[2])):'';
  middlename = (fullname.match(re)[3] !== undefined)?camelcase(nospace(fullname.match(re)[3])):'';

  if (lastname.match(dig)[0] !== lastname |  firstname.match(dig)[0] !== firstname | middlename.match(dig)[0] !== middlename) {
    lastname = 'Invalid fullname';
    firstname = '';
    middlename = '';
  }
    else {
      firstname = (firstname !== '')?' ' + firstname.charAt(0)+'.':'';
      middlename = (middlename!== '')?' ' + middlename.charAt(0)+'.':'';
  }
  return [lastname, firstname, middlename]
}

function nospace(str) {
  const VRegExp = new RegExp(/^\s+/g);
  const VResult = str.replace(VRegExp, '');
  return VResult
}

function camelcase(str) {
  const result = str[0].toUpperCase() + str.slice(1).toLocaleLowerCase();
  return result;
}

