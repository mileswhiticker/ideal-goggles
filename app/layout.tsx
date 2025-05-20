"use client"

import React from "react";
import { Amplify } from "aws-amplify";

import { Inter } from "next/font/google";
import "./app.css";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import outputs from "@/amplify_outputs.json";
outputs.data.api_key = 'da2-neebrkhfwnbybh23bjottiac44';
Amplify.configure(outputs);

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <Authenticator>
                  {children}
              </Authenticator>
          </body>
      </html>
  );
}
