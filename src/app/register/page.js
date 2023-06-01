"use client";
import { addProducts } from "../services/products/addProducts";
import Link from "next/link";

export default function Register() {
  const postProducts = async () => {
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;
    const price = parseInt(document.getElementById("price").value);
    await addProducts([
      {
        category,
        description,
        price,
      },
    ]);
  };

  return (
    <div>
      <label>Categoria</label>
      <input type="text" id="category" />
      <br />
      <label>Descrição</label>
      <input type="text" id="description" />
      <br />
      <label>Preço</label>
      <input type="number" id="price" />
      <br />
      <button onClick={() => postProducts()}>Enviar</button>
      <Link href="/">Home</Link>
    </div>
  );
}
