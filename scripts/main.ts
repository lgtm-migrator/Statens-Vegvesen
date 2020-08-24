/*import { sendForm } from './statens-vegvesen';
import { checkValidText } from './checkvalidtext';
import { isIE, checkIfIE } from './checkifie11';*/

import CheckValidText from './classes/CheckValidText';
import SendForm from './classes/SendForm';

class MainClass {
  #textInput = <HTMLInputElement>(
    window.document.getElementById('bilinformasjon')
  );
  #textForm = <HTMLFormElement>window.document.getElementById('regnrform');
  #submitButton = window.document.getElementById('submitButton');

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.addEventHandlers();
  }

  private addEventHandlers(): void {
    this.#textInput!.addEventListener('input', CheckValidText.checkValidText);

    //this.#textForm!.addEventListener('submit', SendForm.sendForm);
    this.#textForm!.addEventListener('submit', (e) => {
      alert('submitting');
      e.preventDefault();
    });

    this.#submitButton!.addEventListener('click', (e) => {
      console.log('Button clicked');
      console.log(this.#textInput!.value);
      e.preventDefault();
    });
  }
}

const Main = new MainClass();
