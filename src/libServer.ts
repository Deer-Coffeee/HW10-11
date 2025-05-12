import express from 'express';
import {PORT} from "./config/libConfig.js";
import {errorHandler} from "./errorHandler/errorHandler.js";
import {libRouter} from "./rauters/libRouter.js";
import { connectDB } from "./config/db.js";


export const launchServer = async () => {
    await connectDB();
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello from Library Server! 📚');
    });

    app.listen(PORT, () => console.log(`Server runs at http://localhost:${PORT}`))

    //===============Middleware====================
    app.use(express.json());

    //===============Router========================
    app.use('/api', libRouter);

    //==============ErrorHandler===================
    app.use(errorHandler);
}
