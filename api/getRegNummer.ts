import fetch from "node-fetch";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default function getRegNummer(
  req: VercelRequest,
  res: VercelResponse
): void {
  const { regNummer = "" } = req.query;
  const urlToFetch = `https://www.vegvesen.no/ws/no/vegvesen/kjoretoy/kjoretoyoppslag/v1/kjennemerkeoppslag/kjoretoy/${regNummer}`;
  if (regNummer !== undefined) {
    fetch(urlToFetch)
      .then((response) => response.json())
      .then((data: VercelResponse) => {
        res.send(data);
      })
      .catch(() => {
        return;
      });
  }
}
