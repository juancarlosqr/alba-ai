import Script from 'next/script'

export function Snippet({
  id,
  scriptSnippet,
}: {
  id: string
  scriptSnippet: string | undefined
}) {
  return (
    <>
      {scriptSnippet && (
        <Script
          id={id}
          dangerouslySetInnerHTML={{
            __html: scriptSnippet,
          }}
        />
      )}
    </>
  )
}
