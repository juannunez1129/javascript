/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

const inject = document.getElementById('inject')

const centerTag = document.createElement('center');
inject.appendChild(centerTag)

var italizeTag = document.createElement('i')
italizeTag.innerHTML = 'HTML Practice Exercise TEKcamp.'

const headingH1 = document.createElement('h1')
headingH1.appendChild(italizeTag)
inject.appendChild(headingH1)

const aTag = document.createElement('a')
aTag.innerHTML = 'TEKsystems "TEKcamp"'
aTag.href = ""

const headingH2 = document.createElement('h2')
headingH2.appendChild(aTag)
inject.appendChild(headingH2)

centerTag.appendChild(headingH1)
centerTag.appendChild(headingH2)

const hRule = document.createElement('hr')
inject.appendChild(hRule)

const pTag = document.createElement('p')
pTag.innerHTML = 'I love <i> HTML </i>for the following reasons:'
inject.appendChild(pTag)

const orderedList = document.createElement('ol')
inject.appendChild(orderedList)

const listItem1 = document.createElement('li')
const listItem2 = document.createElement('li')
const listItem3 = document.createElement('li')
listItem1.innerHTML = 'I learned it quickly.'
listItem2.innerHTML = 'I can make web pages using code'
listItem3.innerHTML = 'It’s fun.'
orderedList.appendChild(listItem1)
orderedList.appendChild(listItem2)
orderedList.appendChild(listItem3)

const hRule2 = document.createElement('hr')
inject.appendChild(hRule2)

const pTag2 = document.createElement('p')
pTag2.innerHTML = 'My instructor’s email address is: '

let hrefLink = document.createElement("a") 
hrefLink.innerHTML = 'ayunas@teksystems.com'
hrefLink.setAttribute("href", "mailto:ayunas@teksystems.com")

const nodePeriod = document.createTextNode('.')

pTag2.appendChild(hrefLink)
pTag2.appendChild(nodePeriod)
inject.appendChild(pTag2)

const boldText = document.createElement('b')
boldText.innerHTML = 'Have a great day!'

const bottomH2 = document.createElement('h2')
bottomH2.appendChild(boldText)
inject.appendChild(bottomH2)

const bottomText = document.createElement('p')
bottomText.innerHTML = 'I really look forward to learning how to code! Have a great day. -[Team "Git\'er Done"]'

inject.appendChild(bottomText)