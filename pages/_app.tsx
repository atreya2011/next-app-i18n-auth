import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
function App({ Component, pageProps, router: { route, locale } }: AppProps) {
  const { session, ...rest } = pageProps as typeof pageProps & { session: Session };
  return (
      <SessionProvider
        // Provider options are not required but can be useful in situations where
        // you have a short session maxAge time. Shown here with default values.
        session={session}
      >
        <Component {...rest} />
      </SessionProvider>
  );
}

export default App;
