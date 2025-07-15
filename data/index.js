import Link from "next/link";
import products from "../data/products";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Our Products</h1>
      <div style={{ display: "grid", gap: "2rem" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
            <img src={product.image} alt={product.name} style={{ maxWidth: "200px" }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link href={`/quote?product=${encodeURIComponent(product.name)}`}>
              <button>Request Quote</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
