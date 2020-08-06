import express from 'express';

export const app = express();

const port = 8080;

app.listen(port, err => {
    if(err) {
        console.log('Server error ' + err);
    }

    return console.log(`Server is listening on port: ${port}`);
});
