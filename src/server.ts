// src/server.ts
import express from 'express';
import path from 'path';
import indexRouter from './routes/index';
import { chatResponse } from './controllers/chatController';
import "dotenv/config";
import bodyParser from 'body-parser';

const app = express();

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// public folder
app.use(express.static('public'));

// Routes
app.use('/', indexRouter);
app.post('/api/chat-response', chatResponse);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
