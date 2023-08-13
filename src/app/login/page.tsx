import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <div>
      <h2>Log in</h2>
      <div class="flex flex-col space-y-5 my-10 w-1/5 items-center">
        <button class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
          Google
        </button>
        <button class="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded">
          Discord
        </button>
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
          GitHub
        </button>
      </div>
      <Link href="/dashboard" class="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-3 rounded" >Dashboard</Link>
      <Link href="/" class="bg-gray-500 hover:bg-blue-400 text-white font-bold py-2 px-3 rounded" >Home</Link>
  </div>
  )
}
