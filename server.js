const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Đọc JSON từ request

// Route mẫu
app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
