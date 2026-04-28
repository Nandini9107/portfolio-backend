const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Project = require("./projectModel");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
mongoose.connect("mongodb+srv://portfolioUser:strongDB12@cluster0.rosxyvy.mongodb.net/portfolioDB?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

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

// Add sample data
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

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
