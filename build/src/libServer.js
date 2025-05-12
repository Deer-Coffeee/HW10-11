import express from 'express';
import { PORT } from "./config/libConfig.js";
import { errorHandler } from "./errorHandler/errorHandler.js";
import { libRouter } from "./rauters/libRouter.js";
export const launchServer = () => {
    const app = express();
    app.get('/', (req, res) => {
        res.send('Hello from Library Server! 📚');
    });
    app.listen(PORT, () => console.log(`Server runs at http://localhost:${PORT}`));
    app.use(express.json());
    app.use('/api', libRouter);
    app.use(errorHandler);
};
