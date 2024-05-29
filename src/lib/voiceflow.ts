import { cookies } from 'next/headers'

const vfProjectID = process.env.VF_PROJECT_ID
const vfVersionID = process.env.VF_VERSION_ID
const vfUserID = process.env.VF_USER_ID

export async function generateVoiceflowScriptSnippet() {
  const cookieStore = cookies()
  let userID = cookieStore.get('userID')?.value

  if (process.env.NODE_ENV !== 'production' && !userID && vfUserID) {
    userID = vfUserID

    console.log('DEBUG', { userID })
  }

  if (!vfProjectID || !vfVersionID || !userID) {
    return
  }

  return `
    (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '${vfProjectID}' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: '${vfVersionID}',
            userID: '${userID}',
          });
        }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script');
  `
}
