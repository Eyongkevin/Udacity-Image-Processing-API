import { app } from './app';

const PORT: number = 5000;

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
