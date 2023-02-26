import { Session } from 'next-auth';
import { headers } from 'next/headers';
import AuthContext from '../AuthContext';

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
  }) {
    const session = await getSession(headers().get('cookie') ?? '');
  return (
    <html style={{background: "yellow"}} lang={params.lang}>
      <AuthContext session={session}>
        {children}
      </AuthContext>
    </html>
  )
}
