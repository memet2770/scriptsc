import { notFound } from 'next/navigation'
import PayForm from '../../components/PayForm'

type Params = { params: { slug: string } }

const scripts = {
  'rtsp-scanner': {
    title: 'RTSP 554 Port Scanner',
    description:
      'IP aralığında 554 portunu tarar, RTSP kameralara açık olanları listeler.',
    price: '₺129,00',
  },
  formsniper: {
    title: 'FormSniper',
    description:
      'Web sayfalarındaki sahte formları analiz eder, veri gönderilen adresi çözümler, ekran görüntüsü alır.',
    price: '₺179,00',
  },
}

export default function ScriptDetail({ params }: Params) {
  const script = scripts[params.slug as keyof typeof scripts]
  if (!script) return notFound()

  return (
    <main className="max-w-2xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">{script.title}</h1>
      <p>{script.description}</p>
      <p className="font-semibold">{script.price}</p>
      <PayForm script={params.slug} />
    </main>
  )
}
