import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://cloxgaming:clox1234@ac-qdk5cpl-shard-00-00.03yfr7j.mongodb.net:27017,ac-qdk5cpl-shard-00-01.03yfr7j.mongodb.net:27017,ac-qdk5cpl-shard-00-02.03yfr7j.mongodb.net:27017/?ssl=true&replicaSet=atlas-w3c120-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;