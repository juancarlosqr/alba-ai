import { Nav } from '@/components/sections/Nav'
import { Snippet } from '@/components/sections/Snippet'
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

        <div className="py-8">{children}</div>
      </div>

      <Snippet id="voiceflow-widget" scriptSnippet={scriptSnippet} />
    </>
  )
}
