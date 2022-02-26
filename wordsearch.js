// Nika Ptushkina & Artem Iefymenko
const { transpose } = require('./transpose')

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalArray = transpose(letters);
    const verticalJoin = verticalArray.map(ls => ls.join(''));

    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        } 
    };
    
    for (const l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    };
   return false
};

module.exports = wordSearch;