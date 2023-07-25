import AuthContext from './context/AuthContext'
import './globals.css'
import type { Metadata } from 'next'
import ToasterContext from './context/ToastContext'
import ScrollToTopButton from './components/anchor/ScrollToTopButton'


export const metadata: Metadata = {
  title: 'Ça potage | Plateforme de mise en relation de jardiniers et acheteurs',
  description: 'Découvrez notre plateforme de qui met en relation les petits jardiniers et les acheteurs à la recherche de produits frais. Inscrivez-vous dès maintenant pour profiter d\'une expérience de jardinage locale et durable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <AuthContext>
          <ToasterContext />
        {children}
        <ScrollToTopButton />
        </AuthContext>
      </body>
    </html>
  )
}
