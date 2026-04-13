// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { connectDB } from "./config/database.js";
// import User from "./models/User.js";
// import Menu from "./models/Menu.js";
// import Order from "./models/Order.js";
// import Reservation from "./models/Reservation.js";
// import { logger } from "./utils/logger.js";

// // Load env
// dotenv.config();

// const seedData = async () => {
//   try {
//     await connectDB();
//     logger.info("Connected to DB for seeding");

//     // Clear existing data
//     await Promise.all([
//       Menu.deleteMany({}),
//       Order.deleteMany({}),
//       Reservation.deleteMany({}),
//       User.deleteMany({ googleId: { $exists: false } }), // Keep Google users
//     ]);

//     // Create admin user (manual login for testing)
//     const admin = await User.findOneAndUpdate(
//       { email: "admin@restaurant.com" },
//       {
//         googleId: "admin-google-id",
//         email: "admin@restaurant.com",
//         name: "Admin User",
//         role: "admin",
//       },
//       { upsert: true, new: true },
//     );

//     // Seed menus
//     const menus = await Menu.insertMany([
//       {
//         name: "Butter Chicken",
//         description: "Creamy tomato-based curry with tender chicken",
//         category: "main",
//         price: 350,
//         imageUrl: "/api/upload/placeholder-butter-chicken.jpg",
//         isAvailable: true,
//         ingredients: ["chicken", "butter", "cream", "tomato"],
//       },
//       {
//         name: "Paneer Tikka",
//         description: "Smoked paneer cubes marinated in yogurt spices",
//         category: "appetizer",
//         price: 280,
//         imageUrl: "/api/upload/placeholder-paneer.jpg",
//         isAvailable: true,
//         ingredients: ["paneer", "yogurt", "spices"],
//       },
//       {
//         name: "Dal Makhani",
//         description: "Slow-cooked black lentils with butter and cream",
//         category: "main",
//         price: 250,
//         imageUrl: "/api/upload/placeholder-dal.jpg",
//         isAvailable: true,
//         ingredients: ["black lentils", "butter", "cream"],
//       },
//       {
//         name: "Naan",
//         description: "Soft tandoori flatbread",
//         category: "main",
//         price: 60,
//         imageUrl: "/api/upload/placeholder-naan.jpg",
//         isAvailable: true,
//         ingredients: ["flour", "yogurt"],
//       },
//       {
//         name: "Mango Lassi",
//         description: "Sweet yogurt drink with mango",
//         category: "beverage",
//         price: 120,
//         imageUrl: "/api/upload/placeholder-lassi.jpg",
//         isAvailable: true,
//         ingredients: ["mango", "yogurt"],
//       },
//     ]);

//     // Sample order (guest)
//     await Order.create({
//       customerName: "John Doe",
//       customerPhone: "+91 9876543210",
//       customerEmail: "john@example.com",
//       items: [
//         {
//           name: "Butter Chicken",
//           quantity: 2,
//           price: 350,
//           menuId: menus[0]._id,
//         },
//       ],
//       totalPrice: 700,
//       payment: { method: "cash", status: "pending" },
//       status: "delivered",
//     });

//     // Sample reservation
//     await Reservation.create({
//       customerName: "Jane Smith",
//       customerPhone: "+91 9876543210",
//       customerEmail: "jane@example.com",
//       guests: 4,
//       date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // next week
//       time: "19:30",
//       status: "confirmed",
//     });

//     logger.info("✅ Seeding complete!");
//     logger.info(`Admin login: admin@restaurant.com (role: admin)`);
//     logger.info("Test menu items, 1 sample order, 1 reservation created");

//     process.exit(0);
//   } catch (error) {
//     logger.error(`Seeding error: ${error.message}`);
//     process.exit(1);
//   }
// };

// seedData();
