const findDesiredString = (string, regExp, replaceValue = "!") => {
	return string.replace(regExp, replaceValue);
}

const str = 'ahb acb aeb aeeb adcb axeb';
console.log(findDesiredString(str, /a.b/g));

const str2 = 'aba aca aea abba adca abea';
console.log(findDesiredString(str2, /a..a/g))

const str3 = 'aba aca aea abba adca abea';
console.log(findDesiredString(str3, /ab.a/g));

const str4 = 'aa aba abba abbba abca abea';
console.log(findDesiredString(str4, /ab+a/g));

const str5 = 'aa aba abba abbba abca abea';
console.log(findDesiredString(str5, /ab*a/g));

const str6 = 'aa aba abba abbba abca abea';
console.log(findDesiredString(str6, /ab?a/g));

const str7 = 'aa aba abba abbba abca abea';
console.log(findDesiredString(str7, /ab+a/g));

const str8 = 'ab abab abab abababab abea';
console.log(findDesiredString(str8, /(ab)+/g));

const str9 = 'a.a aba aea';
console.log(findDesiredString(str9, /a\.a/g));

const str10 = '2+3 223 2223';
console.log(findDesiredString(str10, /2\+3/g));

const str11 = '23 2+3 2++3 2+++3 345 567';
console.log(findDesiredString(str11, /2\++3/g));

const str12 = '23 2+3 2++3 2+++3 445 677';
console.log(findDesiredString(str12, /2\+*3/g));

const str13 = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
console.log(findDesiredString(str13, /\*q+\+/g));

const str14 = '[abc] {abc} abc (abc) [abc]';
console.log(findDesiredString(str14, /\[\w+]/g));

const str15 = 'aa aba abba abbba abbbba abbbbba';
console.log(findDesiredString(str15, /ab{2,4}a/g));

const str16 = 'aa aba abba abbba abbbba abbbbba';
console.log(findDesiredString(str16, /ab{1,3}a/g));

const str17 = 'aa aba abba abbba abbbba abbbbba';
console.log(findDesiredString(str17, /ab{4,}a/g));

const str18 = 'aba accca azzza wwwwa';
console.log(findDesiredString(str18, /a.+?a/g));

const str19 = 'a1a a2a a3a a4a a5a aba aca';
console.log(findDesiredString(str19, /a\da/g));

const str20 = 'a1a a22a a333a a4444a a55555a aba aca';
console.log(findDesiredString(str20, /a\d+a/g));

const str21 = 'a1a a22a a333a a4444a a55555a aba aca';
console.log(findDesiredString(str21, /a\d*a/g));

const str22 = 'avb a1b a2b a3b a4b a5b abb acb';
console.log(findDesiredString(str22, /a\Db/g));

const str23 = 'ave a#b a2b a$b a4b a5b a-b acb';
console.log(findDesiredString(str23, /a\Wb/g));

const str24 = 'ave a#a a2a a$a a4a a5a a-a aca';
console.log(findDesiredString(str24, /\s/g));

const str25 = 'aba aea aca aza axa';
console.log(findDesiredString(str25, /a[bex]a/g));

const str26 = 'a1a a3a a7a a9a aba';
console.log(findDesiredString(str26, /a[3-6]a/g));

const str27 = 'aba aea afa aha aga';
console.log(findDesiredString(str27, /a[a-g]a/g));

const str28 = 'aba aea afa aha aga';
console.log(findDesiredString(str28, /a[a-fj-z]a/g));

const str29 = 'aAa aea aEa aJa a3a';
console.log(findDesiredString(str29, /a[a-fA-D]a/g));

const str30 = 'aAXa aeffa aGha aza ax23a a3sSa';
console.log(findDesiredString(str30, /a[a-z]+a/g));

const str31 = 'aAXa aeffa aGha aza ax23a a3sSa';
console.log(findDesiredString(str31, /a[a-zA-Z]a/g));

const str32 = 'aAXa aeffa aGha aza ax23a a3sSa';
console.log(findDesiredString(str32, /a[a-z0-9]a/g));

const regExp = /1[^ex]2/g;
const regExp2 = /x[^2-7]z/g;
const regExp3 = /x[^A-Z+]z/g;
const regExp4 = /x[^A-Z]\^d{1,5}z/g;

const regExp5 = /\b\d\d:\d\d\b/;
const regExp6 = /\d\d[:-]\d\d/;

const regExp7 = /\.{3,}/g;
const regExp8 = /#[a-f0-9]{6}\b/gi;

const regExp9 = /<!-*?>/;