import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <div>
      <h2>Log in</h2>
      <div className="flex flex-col space-y-5 my-10 w-1/5 items-center">
        <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
          Google
        </button>
        <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded">
          Discord
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
          GitHub
        </button>
      </div>
      <Link href="/dashboard" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-3 rounded" >Dashboard</Link>
      <Link href="/" className="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-3 rounded" >Home</Link>
  </div>
  )
}
