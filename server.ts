import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Simple static file server
app.use('/', express.static(join(__dirname, 'dist')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});