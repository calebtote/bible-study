import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { PreferencesProvider } from "@/lib/state/preferences";
import { TopBar } from "@/components/shell/TopBar";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Joshua: The Journey into the Land",
    template: "%s · Joshua",
  },
  description:
    "An interactive study of the book of Joshua: the text, the ground it happened on, the world around it, and what is and is not known about both.",
};

export const viewport: Viewport = {
  themeColor: "#f7f3ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-forest focus:px-3 focus:py-2 focus:text-sm focus:text-ivory"
        >
          Skip to content
        </a>
        <PreferencesProvider>
          <div className="flex min-h-dvh flex-col">
            <TopBar />
            <main id="main" className="min-h-0 flex-1">
              {children}
            </main>
          </div>
        </PreferencesProvider>
      </body>
    </html>
  );
}
