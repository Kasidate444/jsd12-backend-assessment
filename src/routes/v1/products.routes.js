import { Router } from "express";
import { products } from "../../fakeData/fakeProducts.js";

export const router = Router();

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", (req, res) => {
  const { product_name, price } = req.body || {};
  if (!product_name || !price) {
    return res
      .status(400)
      .json({ error: "product name and price are required" });
  }

  const nextId = String(
    (products.reduce((max, u) => Math.max(max, Number(u.id)), 0) || 0) + 1,
  );

  const newProduct = { id: nextId, product_name: product_name, price: price };

  products.push(newProduct);

  return res.status(201).json(newProduct);
});

router.put("/:id", (req, res) => {
  const product = products.find((u) => u.id === req.params.id);

  if (!product) {
    return res.status(404).json({ error: "Product not found!" });
  }

  const { product_name, price, quantity } = req.body;

  if (!product_name || !price || !quantity) {
    return res
      .status(400)
      .json({ error: "product name, price and quantity are required!" });
  }

  product.product_name = product_name;
  product.price = price;
  product.quantity = quantity;

  res.status(200).json(product);
});

router.delete("/:id", (req, res) => {
  const productIndex = products.findIndex((u) => u.id === req.params.id);

  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found!" });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];

  return res.status(200).json({ message: "Product deleted.", product: deletedProduct });
});
