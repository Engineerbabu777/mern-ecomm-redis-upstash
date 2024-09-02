import express from "express";


// check!
const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json({ limit: "10mb" })); // allows you to parse the body of the request



app.listen(PORT, () => {
	console.log("Server is running on http://localhost:" + PORT);
	// connectDB();
});
