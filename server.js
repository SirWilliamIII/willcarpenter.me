const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

// Serve static files (JS, CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')))

// Route: Home page
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Catch-all 404 handler
app.use((_, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
})

app.listen(PORT, () => console.log(`🚀 on http://localhost:${PORT}`))
