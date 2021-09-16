//pakage.json manual approach -> create install in root
//npm init 

//local dependancy - use it only in this particular project (MORE USEFUL)
//npm i <packageName>

//global dependancy - use it in any project
//npm install -g <packageName>
// need credentials , sudo npm install -g <packageName> (MAC)

//pakage.json - manifest file (store important project informations)
//manual (create package in root , create properties etc)
//npm init (step)
//npm init -y (defaults)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)