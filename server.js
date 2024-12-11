import express from 'express';
import config from './src/config/config.js';
import cors from 'cors';
import db from './src/config/dbConfing.js';
import productRouter from './src/routes/product.route.js';
import errorHandler from './src/middlewares/errorHandler.middleware.js';
import userRouter from './src/routes/user.router.js';
import path from 'path';
import bodyParser from 'body-parser';
import { Server as socketIo } from 'socket.io';
import http from 'http';
import chalk from 'chalk';
import moment from 'moment';
import { pollingRouter } from './src/routes/polling.route.js';

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log("API =>", req.path);
    next();
});
app.use(express.static(path.dirname('images')));

// Routes
app.use(productRouter);
app.use(userRouter);
app.use(pollingRouter)

// Error Handler
app.use(errorHandler);

// Server and Database
const server = http.createServer(app);


// Socket.io Setup
const io = new socketIo(server, {
    cors: {
        origin: (origin, callback) => {
            if (config.corsOrigin.includes(origin) || !origin) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        }
    }
});

const originalEmit = io.emit.bind(io);
io.emit = (...args) => {
    console.log("Emit:", args);
    originalEmit(...args);
};

io.on("connection", (socket) => {
    console.log("User connected");

});

db.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
    } else {
        server.listen(config.PORT, (error) => {
            if (error) {
                console.error("Error starting server:", error);
            } else {
                console.log("Server running on port " + config.PORT);
            }
        });
    }
});

export { io };
