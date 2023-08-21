import express, {Application} from 'express';

export default class App{
    app: Application

    constructor(){
        this.app = express();

        this.middelwares();
        this.routes();
        this.exceptionHandler();
    }
    listen(port: number):void {
        this.app.listen(port,()=>{
            console.log(`Server started at ${port}`)
        })
    }

    private middelwares(){}
    private routes(){}
    private exceptionHandler(){}
}