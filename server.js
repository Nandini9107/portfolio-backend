const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Project = require("./projectModel");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MONGODB CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


// ✅ STEP 7: ADD THESE ROUTES HERE 👇

// GET all projects
app.get("/api/projects", async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

// ADD project
app.post("/api/projects", async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    res.json(project);
});


// SERVER START
app.get("/add-data", async (req, res) => {
    await Project.create({
        title: "Skincare App",
        description: "Modern UI skincare website",
        tech: "HTML, CSS, JS"
    });

    await Project.create({
        title: "Sorting Visualizer",
        description: "Algorithm visualization tool",
        tech: "JavaScript"
    });

    res.send("Data added successfully");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});