const express = require('express');
const router = express.Router();

// Recommendation algorithm
router.get('/', (req, res) => {
  // Simple algorithm logic
  const recommendations = ['Friend 1', 'Friend 2', 'Friend 3'];
  res.json({ recommendations });
});

module.exports = router;
