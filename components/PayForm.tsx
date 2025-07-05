'use client'
import { useState } from 'react'

export default function PayForm({ script }: { script: string }) {
  const [paid, setPaid] = useState(false)

  const handlePay = async () => {
    // Sahte PayTR entegrasyonu
    await new Promise((r) => setTimeout(r, 500))
    setPaid(true)
  }

  if (paid) {
    return (
      <div className="mt-4 p-4 border border-green-500">
        <p>Ödemeniz alındı.</p>
        <a
          href={`/downloads/${script}.txt`}
          className="text-secondary underline"
        >
          İndir
        </a>
      </div>
    )
  }

  return (
    <button
      onClick={handlePay}
      className="mt-4 px-4 py-2 bg-secondary text-black rounded"
    >
      Satın Al
    </button>
  )
}
