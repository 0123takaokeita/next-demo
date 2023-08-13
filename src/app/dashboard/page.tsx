import Image from 'next/image'

export default function Home() {
  const ary = ['takao', 'lobin', 'tomo']
  const items = ['コンテンツ1', 'コンテンツ2', 'コンテンツ3'];
  const names = ary.map((item, i) => (
    <li key={i}>{item}</li>
  ))

  return (
  <div>
      <h5>Meet the</h5>
      <h1>Enginners</h1>
      <ul>{names}</ul>
      <button>Button</button>
  </div>
  )
}
