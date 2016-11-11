/**
 * Created by Dmitriy Prilutsky on 10.11.2016.
 */

export default function canonize(fullname) {
  var lastname = 'Invalid fullname';
  var firstname = '';
  var middlename = '';
  const re = new RegExp('(\\s*[W\\S]*)(\\s*[W\\S]*)?(\\s*[W\\S]*)?(\\s*[W\\S]*)?');
  const dig = new RegExp('[^\d]*');
  if (fullname.match(re)[4] !== undefined | fullname.match(re)[0] === '') {
     return [lastname, firstname, middlename]
  }
  fullname = fullname.replace(/(\s*[W\S]*)(\s*[W\S]*)?(\s*[W\S]*)?(\s*[W\S]*)?/i, "$3 $1$2");
  if (fullname.match(re)[3] === undefined) {
    fullname = fullname.replace(/(\s*[W\S]*)(\s*[W\S]*)?/i, "$2 $1");
  }
  if (fullname.match(re)[0] !== '') {
        lastname = nospace(fullname.match(re)[1]);
        firstname = (fullname.match(re)[2] !== undefined)?' '+nospace(fullname.match(re)[2]).charAt(0)+'.':'';
        middlename = (fullname.match(re)[3] !== undefined)?' '+nospace(fullname.match(re)[3]).charAt(0)+'.':'';
    /*console.log(lastname);
    console.log(lastname.match(dig)[1]);
        lastname = (lastname.match(dig)[1] === lastname)?lastname:'Invalid fullname';
    console.log(lastname);
        middlename = (middlename.match(dig)[1] === middlename)?middlename:'',lastname = 'Invalid fullname';
        firstname = (firstname.match(dig)[1] === firstname)?firstname:'',lastname = 'Invalid fullname';*/
      }
  return [lastname, firstname, middlename]
}

function nospace(str) {
  const VRegExp = new RegExp(/^\s+/g);
  const VResult = str.replace(VRegExp, '');
  return VResult
}

