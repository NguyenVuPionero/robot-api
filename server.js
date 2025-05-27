const app = require('./greek');

const port = 8081;
// Lắng nghe server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});