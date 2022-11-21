// @return {Array}

export function getAll() {
     return [
          {
               id: 1,
               text: 'Learn Javascript',
               completed: false
          },
          {
               id: 2,
               text: 'Learn React',
               completed: false
          },
          {
               id: 3,
               text: 'build a React App',
               completed: false
          },
     ]
}

// @type {Number}
let todoCounter = 1

function getNextId() {
     return getAll().length + todoCounter++;
}

// @param {Array}
// @param {Object}
// @return {Array}

export function addToList(list, data ) {
     let item = Object.assign({
          id: getNextId()
     }, data)
     return list.concat([item])
}