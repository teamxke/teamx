import AppBar from "@/components/widgets/AppBar";
import Footer from "@/components/widgets/Footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex relative flex-col min-h-screen bg-background text-foreground">
      <AppBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
