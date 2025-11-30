import type { Metadata } from 'next'
import './globals.css'
import { Taskbar } from './components/taskbar'
import { ReduxProvider } from './providers/redux-provider'
import { Topbar } from './components/topbar'
import { WalpaperProvider } from './components/walpaper-wraper'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: 'Anupriya Portfolio',
  description:
    'Anupriya Portfolio | Full Stack Developer | React | Node.js | JavaScript | TypeScript | AI/ML | Agentic AI | System Design | Full-Stack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen overflow-hidden">
        <ReduxProvider>
          <ThemeProvider
            enableSystem
            attribute="class"
            disableTransitionOnChange
          >
            <WalpaperProvider />
            <Topbar />
            {children}
            <Taskbar />
            <div id="modal" />
            <div id="context-menu" />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
