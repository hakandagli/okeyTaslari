import { Component, OnInit } from '@angular/core';
import { card, colorType, existingStateType } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'okey-taslari';
  cards: card[] = [];
  mobile: boolean = false;

  ngOnInit(): void {
    this.setCards();
  }

  setCards() {
    let idCount = 0;
    this.cards = [];
    for (let color in colorType) {
      if (!isNaN(Number(color))) {
        for (let i = 1; i < 14; i++) {
          idCount++;
          this.cards.push(
            {
              id: idCount,
              color: parseInt(color) as colorType,
              value: i,
              existingState: existingStateType.double
            }
          )
        }
      }
    }
  }

  selectedChange(card: card) {
    let index = this.cards.findIndex(x => x.id === card.id);
    this.cards[index].existingState = (this.cards[index].existingState === existingStateType.none) ? existingStateType.double : this.cards[index].existingState as number - 1 as existingStateType;
  }

  get colorTypeKeys(): colorType[] {
    let colors = [];
    for (let color in colorType) {
      if (!isNaN(Number(color))) {
        colors.push(parseInt(color) as colorType);
      }
    }
    return colors;
  }

  get colorType() {
    return colorType;
  }

  get existingStateType() {
    return existingStateType;
  }

  rotateChange() {
    this.mobile = !this.mobile;
  }
}
