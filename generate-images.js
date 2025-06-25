const fs = require("fs");
const path = require("path");

// Path to product-mock.json
const dataPath = path.join(__dirname, "public", "product-mock.json");

// Path to the placeholder image
const placeholderPath = path.join(__dirname, "public", "images", "placeholder.png");

// Read and parse the JSON file
const rawData = fs.readFileSync(dataPath, "utf-8");
const data = JSON.parse(rawData);

// Ensure the images folder exists
const imagesDir = path.join(__dirname, "public", "images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate image files based on product slug
if (!data.products) {
  console.error("❌ The JSON file doesn't contain a 'products' array.");
  process.exit(1);
}

data.products.forEach((product) => {
  const newImagePath = path.join(imagesDir, `${product.slug}.png`);

  if (!fs.existsSync(newImagePath)) {
    fs.copyFileSync(placeholderPath, newImagePath);
    console.log(`✅ Created: ${product.slug}.png`);
  } else {
    console.log(`ℹ️ Already exists: ${product.slug}.png`);
  }
});
