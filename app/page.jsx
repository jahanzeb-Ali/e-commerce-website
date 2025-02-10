"use client";
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    (<div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80')",
              }} />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">New Collection Arrived</h1>
            <p className="text-xl mb-8">Discover our latest collection of premium clothing and accessories.</p>
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Shop Now
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12">
            Featured Products
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12">
            Shop by Category
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Clothing",
                image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
              },
              {
                name: "Accessories",
                image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
              },
              {
                name: "Footwear",
                image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
              },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative aspect-square">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${category.image}')`,
                  }} />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>)
  );
}

