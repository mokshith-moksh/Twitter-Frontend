"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TwitterLayout from "@/components/Layout/TwitterLayout";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <GoogleOAuthProvider clientId="642387588707-mkkj7docs1cnpko98lv9pl5ec5ehm6v0.apps.googleusercontent.com">
            <TwitterLayout>{children}</TwitterLayout>
            <Toaster />
            <ReactQueryDevtools />
          </GoogleOAuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
