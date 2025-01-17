// Class imports
import classShowHideElements from "./classShowHideElements";
import classErrorHandler from "../ErrorHandler/classErrorHandler";

/**
 * Class responsible for fetching the remote data
 */
export default class classFetchRemoteData {
  /**
   * The method responsible for fetching the remote data
   * @returns Promise Returns a promise with the data fetched. Implements a catch that hides elements and shows error message if there is an error
   */
  static fetchRemoteData() {
    const bilInformasjon = (<HTMLInputElement>(
      window.document.getElementById("bilinformasjon")
    )).value;

    const API_URL = "/api/getRegNummer?regNummer=";
    const regNummer = `${API_URL}${bilInformasjon}`;

    return fetch(regNummer)
      .then(async (response) => {
        const bilResponse = await response.text();
        return JSON.parse(bilResponse);
      })
      .catch(() => {
        // Hide elements if we have an error
        classShowHideElements.hideElements();
        classErrorHandler.showErrorFetchingRegNr();
      });
  }
}
