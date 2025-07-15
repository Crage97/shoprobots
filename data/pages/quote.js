import { useRouter } from "next/router";
import { useState } from "react";

export default function QuoteForm() {
  const router = useRouter();
  const defaultProduct = router.query.product || "";
  const [formData, setFormData] = useState({ name: "", email: "", message: defaultProduct });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Request a Quote</h1>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}
      >
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Product or message..." required value={formData.message} onChange={handleChange} />
        <button type="submit">Send Quote</button>
      </form>
    </div>
  );
}
