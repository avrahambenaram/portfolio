import './styles/globals.css';

export const metadata = {
  title: 'Avraham',
  description: 'Avraham Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-slate-700'>{children}</body>
    </html>
  )
}
