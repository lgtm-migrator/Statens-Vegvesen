// Type definition imports
import { TStatensVegvesenBilData } from "../../types/typeDefinitions";

/**
 * Class responsible for handling errors
 * @property {TStatensVegvesenBilData} remoteBilData Remote data from API
 */
export default class classErrorHandler {
  /**
   * Display error (fieldname melding) from API if the registration number was not found
   * Also hide the loading spinner
   * @returns void
   */
  static displayErrorFromAPI(remoteBilData: TStatensVegvesenBilData): void  {
    window.document.getElementById("feilMelding").innerHTML =
      remoteBilData.melding;
    window.document.getElementById("loadingSpinner").classList.add("d-none");
  }

  /**
   * Remove the error text if we fetch new data
   * @returns void
   */
  static resetErrorText(): void  {
    window.document.getElementById("feilMelding").innerHTML = "";
  }

  /**
   * Notify user that an error has happened when fetching data from API
   * @returns void
   */
  static showErrorFetchingRegNr(): void  {
    window.document.getElementById("feilMelding").innerHTML =
      "En feil har oppstått, vennligst prøv igjen.";
  }
}
