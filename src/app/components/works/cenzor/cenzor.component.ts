import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent {
  public words: string[] = [];
  public badWords = '';

  addWords() {
    const inputWord = document.querySelector('.input-word') as HTMLInputElement;
    if (inputWord.value === '') {
      inputWord.placeholder = 'Please write a word!';
      inputWord.style.border = '1px solid red';
    }
    else {
      inputWord.placeholder = 'word here..';
      inputWord.style.border = 'none'
      const word = inputWord.value;
        if (word) {
          this.words.push(word);
          this.badWords = this.words.map(w => `${w}`).join(', ');
        }
    }
    
    inputWord.value = '';
  }

  resetWords() {
    this.badWords = '';
    this.words.length = 0;
  }

  censorWords() {
    const textarea = document.querySelector('.textarea') as HTMLTextAreaElement;
    if (textarea.value === '') {
      textarea.placeholder = 'Please write a text!';
      textarea.style.border = '1px solid red'
    }
    else {
      const text = textarea.value;
      let censoredText = text;
        this.words.forEach(word => {
          const regex = new RegExp(word, 'gi');
          censoredText = censoredText.replace(regex, '*'.repeat(word.length));
        });
      textarea.value = censoredText;
      textarea.style.border = '1px solid green'
    }
  }
}
