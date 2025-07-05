import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center py-20 space-y-6">
      <h1 className="text-4xl font-bold">Hazır Scriptlerle Projelerine Güç Kat</h1>
      <Link href="/scripts" className="px-4 py-2 bg-primary text-white rounded">
        Scriptlere Göz At
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mt-10">
        <div className="border border-gray-700 p-4 rounded">
          <h2 className="text-2xl font-semibold">RTSP Scanner</h2>
          <p className="mt-2">IP aralığında 554 portunu tarar, RTSP kameralara açık olanları listeler.</p>
        </div>
        <div className="border border-gray-700 p-4 rounded">
          <h2 className="text-2xl font-semibold">FormSniper</h2>
          <p className="mt-2">Sahte formları analiz eder, veri gönderilen adresi çözümler.</p>
        </div>
      </div>
    </main>
  )
}
