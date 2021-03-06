const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
//commented out mongoose connection since we're not using the database for this backend
// mongoose.connect('mongodb://localhost/historys', {useNewUrlParser: true});
fs.readdirSync(path.join(__dirname, './../models')).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        require(path.join(__dirname, './../models') + '/' + file);
    }
});
