import { ClerkProvider, } from '@clerk/nextjs'
import "./globals.css";
import { ConvexClientProvider } from '../../Customcomponents/ConvexClientProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
        >
          <ConvexClientProvider>{children} </ConvexClientProvider>
        </body>
      </html>


    </ClerkProvider>

  );
}
