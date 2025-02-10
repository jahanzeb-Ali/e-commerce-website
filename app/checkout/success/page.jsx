"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SuccessPage() {
  const router = useRouter()

  return (
    (<div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
          <CheckCircle className="w-20 h-20 mx-auto text-green-500 mb-6" />
        </motion.div>
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for your purchase. We'll send you a confirmation email with your order details.
        </p>
        <Button onClick={() => router.push("/")} className="w-full">
          Continue Shopping
        </Button>
      </motion.div>
    </div>)
  );
}

