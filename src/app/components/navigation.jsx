'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '../home.module.css'
 
export default function Nav() {
  const pathname = usePathname() //para destacar la página activa

  return (
    <nav>
        <Link 
          className={`link ${pathname === '/' ? styles.berrieslink : ''}`} 
          href="/">
          Poké Berries
        </Link>
        <Link
          className={`link ${pathname === '/items' ? styles.itemslink : ''}`} 
          href="/items">
          Poké Items
        </Link>
    </nav>
  )
}