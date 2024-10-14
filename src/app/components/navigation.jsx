'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '../home.module.css'
 
export default function Nav() {
  const pathname = usePathname()

  return (
    <nav>
        <Link 
        className={`link ${pathname === '/' ? styles.berrieslink : ''}`} 
        href="/">
        Poké Berries
        </Link>
        <Link
        className={`link ${pathname === '/locations' ? styles.locationslink : ''}`} 
        href="/locations">
        Poké Locations
        </Link>
    </nav>
  )
}