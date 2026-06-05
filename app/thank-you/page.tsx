import { redirect } from "next/navigation";
import ThankYouClient from "./ThankYouClient";
import Script from "next/script";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ThankYouPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  
  if (searchParams.success !== "true") {
    redirect("/");
  }

  return (
    <>
      <ThankYouClient />
      {/* Event snippet for Submit lead form (Wondermill) conversion page */}
      <Script id="google-conversion" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('event', 'conversion', {
              'send_to': 'AW-18157164395/_jJQCMjevLkcEOuugdJD',
              'value': 1.0,
              'currency': 'INR'
          });
        `}
      </Script>
    </>
  );
}

