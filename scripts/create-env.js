const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `SPOON_API_KEY=${process.env.SPOON_API_KEY}\nSPOON_API_URL=${process.env.SPOON_API_URL}\nU08_API_URL=${process.env.U08_API_URL}\n`
  );
