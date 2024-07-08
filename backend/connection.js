const mongoose = require('mongoose');

const url='mongodb+srv://suhanijaiswal21:root@cluster0.2bny7lp.mongodb.net/BlogNukkad?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url)

.then((result) => {
console.log('Connected to the database');    
}).catch((err) => {
    log.error('Error connecting to the database');
});

module.exports = mongoose;