import Link from 'next/link'

const scripts = [
  {
    slug: 'rtsp-scanner',
    title: 'RTSP 554 Port Scanner',
    price: '₺129,00',
  },
  {
    slug: 'formsniper',
    title: 'FormSniper',
    price: '₺179,00',
  },
]

export default function ScriptList() {
  return (
    <main className="max-w-4xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Scriptler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scripts.map((s) => (
          <Link
            key={s.slug}
            href={`/scripts/${s.slug}`}
            className="border border-gray-700 p-4 rounded hover:bg-gray-800"
          >
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-2">{s.price}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
