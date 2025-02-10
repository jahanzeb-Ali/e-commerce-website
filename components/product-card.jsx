"use client";
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

export function ProductCard({
  product
}) {
  const { addItem } = useCart()

  return (
    (<Card className="overflow-hidden">
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <div className="aspect-square relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover" />
        </div>
      </motion.div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <div className="text-lg font-bold">${product.price}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="secondary" onClick={() => addItem(product)}>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>)
  );
}

