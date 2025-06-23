const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "public", "product-mock.json");
const rawData = fs.readFileSync(jsonPath, "utf-8");
const data = JSON.parse(rawData);

if (!data.products) {
  console.error("No 'products' array found in JSON.");
  process.exit(1);
}

data.products.forEach((product) => {
  const slug = product.slug;

  // Set main image
  product.image = `/images/${slug}.png`;

  // Set additional images
  product.images = [
    `/images/${slug}-1.png`,
    `/images/${slug}-2.png`,
    `/images/${slug}-3.png`
  ];
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
console.log("✅ Updated product images in product-mock.json");
