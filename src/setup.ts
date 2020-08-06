
import express from 'express';

// const app: any = express();
// const port: number = 8080;

export class Setup {

    app: any = express();
    port: number = 8080;

    init(): void {

        this.app.listen(this.port, (err: any) => {
            if(err) {
                console.log('Server error ' + err);
            }
        
            return console.log(`Server is listening on port: ${port}`);
        });
        
    }

    endPoint(): void {
        this.app.get('/:x/:y', (req, res) => {
            let sum = +req.params.x + +req.params.y;
            res.send(sum.toString());
        });
    }

    

}


