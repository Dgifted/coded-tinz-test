import app from './main';

app.get('/:x/:y', (req, res) => {
    let sum = +req.params.x + +req.params.y;
    res.send(sum.toString());
});
