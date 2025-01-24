import Image from 'next/image'
import Link from 'next/link'
import './style.css'
import './styles/style.scss'


export default function Home() {
  return (
    <>
      <div className='container'>
        <h1>テスト</h1>
        {/* 読み込みが発生しない */}
        <Image 
          src="/next.svg"
          width={150}
          height={60}
          alt="aaa"
        />
        <Link href="about">about</Link>
      </div>
    </>
  )
}
