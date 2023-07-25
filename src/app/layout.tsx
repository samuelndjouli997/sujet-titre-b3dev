import AuthContext from './context/AuthContext'
import './globals.css'
import type { Metadata } from 'next'
import ToasterContext from './context/ToastContext'
import ScrollToTopButton from './components/anchor/ScrollToTopButton'
import Analytics from './analytics'


export const metadata: Metadata = {
  title: 'Ça potage | Plateforme de mise en relation de jardiniers et acheteurs',
  description: 'Découvrez notre plateforme qui met en relation les petits jardiniers et les acheteurs à la recherche de produits frais. Inscrivez-vous dès maintenant pour profiter d\'une expérience de jardinage locale et durable.',
  icons: {
    icon: '/img/favicon.ico',
  },
  twitter: {
    card: "summary_large_image",
    title: "Ça Potage",
    description:
      "Ça potage est un plateforme communautaire qui met en relation les petits jardiniers et les acheteurs à la recherche de produits frais.",
    images: ["https://www.ca-potage.com/img/header/main-logo.svg"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ça Potage",
    description:
      "Ça potage est un site communaitaires entre ceux qui veulent vendre leur production issu du nano maraichage.",
    url: "https://www.ca-potage.com/",
    siteName: "Ça Potage",
    images: [
      {
        url: "https://www.ca-potage.com/img/header/main-logo.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  
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
          <Analytics />
          <ToasterContext />
        {children}
        <ScrollToTopButton />
        </AuthContext>
      </body>
    </html>
  )
}
