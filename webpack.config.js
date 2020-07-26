const uuidv1 = require('uuid/v1');

module.exports = {
    output: {
        jsonpFunction: 'elementtest' + uuidv1(),
        library: 'elements2',
    },
};