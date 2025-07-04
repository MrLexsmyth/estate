// server/index.ts
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

