import { Nav } from '@/components/sections/Nav'
import { generateVoiceflowScriptSnippet } from '@/lib/voiceflow'

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const scriptSnippet = await generateVoiceflowScriptSnippet()

  return (
    <>
      <div className="min-h-full">
        <Nav />

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
      {scriptSnippet && <div dangerouslySetInnerHTML={scriptSnippet} />}
    </>
  )
}
