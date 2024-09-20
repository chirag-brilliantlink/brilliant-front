import Link from 'next/link'
 
export default function Custom404() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}
