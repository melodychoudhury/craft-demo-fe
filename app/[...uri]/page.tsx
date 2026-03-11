// this file reads the current url path, converts it into craft friendly uri and then hand it 
// to page client to fetch the data
import PageClient from "./PageClient";

export default async function Page({ params }) {
  // turns promise into the object
  const p = await params;
   // turns the object into strings e.g. about if string is missing fall backs to empty
  const uriString = p?.uri?.join("/") ?? "";
  // renders the page component and passes the string e.g. about
  return <PageClient uriString={uriString} />;
}