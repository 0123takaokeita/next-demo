import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const ary = ['takao', 'lobin', 'tomo']
  const items = ['コンテンツ1', 'コンテンツ2', 'コンテンツ3'];

  const names = items.map((item, i) => (
    <li key={i}>{item}</li>
  ))

  return (
  <div>
      <h5>Meet the</h5>
      <h1>Enginners</h1>
      <ul>{names}</ul>
      <button>Button</button>
      <Link href="/login" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-3 rounded" >Login</Link>
      <Link href="/dashboard" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-3 rounded" >Dashboard</Link>
  </div>
  )
}
