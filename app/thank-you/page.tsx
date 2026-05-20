import { redirect } from "next/navigation";
import ThankYouClient from "./ThankYouClient";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ThankYouPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  
  if (searchParams.success !== "true") {
    redirect("/");
  }

  return <ThankYouClient />;
}
