// Common JS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./name')
const sayHi = require('./utils')
const data = require('./alternative-exports')
//console.log(data);
require ('./mind-grenade') // meme pas besoin de mettre une const et
//effectue la fonction dedans le module (p-e pour des setups load)


// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

