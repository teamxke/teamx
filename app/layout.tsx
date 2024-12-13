import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/plugins/theme/provider/provider";
import { ThemeSwitcher } from "@/components/plugins/theme/widgets/ThemeSwitcher";
import { META_THEME_COLORS } from "@/components/plugins/theme/config/theme-config";


export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};
export const metadata: Metadata = {
  title: {
    template: "TeamX - %s",
    default: "TeamX",
  },
  description: "TeamX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          try {
            if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
            }
          } catch (_) {}
        `,
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
