"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getProducts } from "./services/products/getProducts";
import { deleteProduct } from "./services/products/deleteProduct";

export default function Home() {
  const [products, setProducts] = useState();

  const getData = async () => {
    const { data } = await getProducts();
    setProducts(data);
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    await getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {products?.map(({ description, id }) => (
        <>
          <span>{description}</span>
          <button onClick={() => removeProduct(id)}>Deletar</button>
          <br />
        </>
      ))}
      <Link href="/register">Register product</Link>
    </div>
  );
}
