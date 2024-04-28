const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Routes for User APIs
app.post("/users", (req, res) => {
  // Create a guest user
  res.json({
    id: "1",
    is_guest: true,
    phone_number: "9600404232",
    phone_number_code: "91",
    is_phone_number_verified: true,
    email: "pat@shoppe.in",
    is_email_verified: true,
    first_name: "Pat",
    last_name: "Mccord",
    gender: "m",
  });
});

app.get("/user/profile", (req, res) => {
  // Get user
  res.json({
    id: "1",
    is_guest: true,
    phone_number: "9600404232",
    phone_number_code: "91",
    is_phone_number_verified: true,
    email: "pat@shoppe.in",
    is_email_verified: true,
    first_name: "Pat",
    last_name: "Mccord",
    gender: "m",
  });
});

app.put("/user/profile", (req, res) => {
  // Update user
  res.json({
    interests: ["beauty", "clothing"],
    billingAddress: "1",
    primaryDeliveryAddress: "1",
    app_theme: "dark",
  });
});

app.post("/user/auth/send-otp", (req, res) => {
  // Register phone number - send otp
  res.json({ success: true });
});

app.post("/user/auth/verify-otp", (req, res) => {
  // Register phone number - verify otp
  res.json({ success: true });
});

// Routes for User Preference APIs
app.get("/user/preferences", (req, res) => {
  // Get user preferences
  res.json({
    interests: ["beauty", "clothing"],
    billingAddress: "1",
    primaryDeliveryAddress: "1",
    app_theme: "dark",
  });
});

app.put("/user/preferences", (req, res) => {
  // Update user preferences
  res.json({
    interests: ["beauty", "clothing"],
    billingAddress: "1",
    primaryDeliveryAddress: "1",
    app_theme: "dark",
  });
});

// Routes for User Cart APIs
app.get("/user/cart", (req, res) => {
  // Get user cart
  res.json({
    total_amount: "320",
    items: [
      {
        product_id: "1",
        product_name: "OUD",
        variant: {
          price: 400,
          dimensions_and_values: [
            { dimension: "color", value: "red" },
            { dimension: "size", value: "L" },
          ],
        },
        quantity: 2,
        total_amount: "320",
      },
    ],
  });
});

app.put("/user/cart", (req, res) => {
  // Update user cart
  res.json({
    total_amount: "320",
    items: [
      {
        product_id: "1",
        product_name: "OUD",
        variant: {
          price: 400,
          dimensions_and_values: [
            { dimension: "color", value: "red" },
            { dimension: "size", value: "L" },
          ],
        },
        quantity: 2,
        total_amount: "320",
      },
    ],
  });
});

app.delete("/user/cart", (req, res) => {
  // Clear user cart
  res.json({
    total_amount: "0",
    items: [],
  });
});

// Route for Homepage API
app.get("/feed", (req, res) => {
  // Get feed
  res.json({
    cards: [
      {
        card_type: "VIDEO_FULL_SCREEN",
        merchant_details: {
          id: "1",
          name: "",
          logo_url: "",
          user_context: {
            is_following: true,
          },
        },
        id: "1",
        name: "OUD by Nizas",
        description: "",
        specification: [],
        variants: [
          {
            price: 330,
            dimensions_and_values: [
              { dimension: "color", value: "red" },
              { dimension: "size", value: "S" },
            ],
          },
          {
            price: 400,
            dimensions_and_values: [
              { dimension: "color", value: "red" },
              { dimension: "size", value: "L" },
            ],
          },
        ],
        video_url: "",
        tags: ["Home & living"],
        user_context: {
          is_bookmarked: true,
        },
      },
    ],
  });
});

// Route for Merchant API
app.get("/merchants/:id", (req, res) => {
  // Get merchant
  res.json({
    name: "Tanaz by Nisas",
    logo_url: "",
    description: "",
    followers_count: 0,
    user_context: {
      is_following: true,
    },
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
