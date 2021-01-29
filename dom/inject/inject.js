/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

const inject = document.getElementById('inject')

const centerTag = document.createElement('center')
// inject.appendChild(centerTag)
console.log("hi")
var italizeTag = document.createElement('i')
italizeTag.innerHTML = 'HTML Practice Exercise TEKcamp.'


