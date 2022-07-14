const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contact', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
});


// // Menambah 1 data
// const contact1 = new Contact({
//     nama: 'doddy nurmansyah',
//     nohp: '089757521567',
//     email: 'doddy@gmail.com',
// });

// // simpan ke collection
// contact1.save().then((Contact) => console.log(Contact));
