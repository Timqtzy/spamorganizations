const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://spamorganizations-client.vercel.app" // Replace with your production URL
      : [
          "http://localhost:5173",
          "http://localhost:3000",
          "http://localhost:5000",
        ], // Add all possible development ports
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define Data model
const dataSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    subscribe: {
      type: Boolean,
      default: true,
    },
  },
  { collection: "User" }
);

// Force the unique index
dataSchema.index({ email: 1 }, { unique: true });

const Data = mongoose.model("Data", dataSchema);

// MailerSend configuration
const MAILERSEND_API_KEY = process.env.MAILERSEND_API_KEY;
const TEMPLATE_ID = process.env.MAILERSEND_TEMPLATE_ID;
const FROM_EMAIL = process.env.MAILERSEND_FROM_EMAIL;

// API endpoints
app.get("/data", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/data", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    const existingEmail = await Data.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    const newData = new Data(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
  author: String,
});

const Blog = mongoose.model("Blog", blogSchema);

// Routes
// Fetch all blogs
app.get("/api/blogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// Fetch a single blog by slug
app.get("/api/blogs/:slug", async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).send("Blog not found");
  }
});

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    const existingEmail = await Data.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    const newEmail = new Data({ email, subscribe: true });
    await newEmail.save();

    // Send email using MailerSend
    await axios.post(
      "https://api.mailersend.com/v1/email",
      {
        from: { email: FROM_EMAIL },
        to: [{ email }],
        template_id: TEMPLATE_ID,
      },
      {
        headers: {
          Authorization: `Bearer ${MAILERSEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(201).json({ message: "Subscribed successfully and email sent" });
  } catch (error) {
    console.error("Error saving email or sending subscription email:", error);
    if (error.code === 11000) {
      return res.status(409).json({ message: "Email already subscribed" });
    }
    res.status(500).json({ message: "Server error" });
  }
});

// Test endpoint
app.get("/test", (req, res) => {
  res.json({ message: "Server is working" });
});

// Serve static files from the 'dist' directory
app.use(
  "/spam-react-apps/assets",
  express.static(path.join(__dirname, "dist/assets"), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      }
    },
  })
);

// All other GET requests not handled will return the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.js"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
