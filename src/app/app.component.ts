import { Component, OnInit, ViewChild } from '@angular/core';
import { Item, NgxWheelComponent, TextAlignment, TextOrientation } from "ngx-wheel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false })
  wheel: NgxWheelComponent | undefined;

  title = 'party-spinner';
  // ngx-wheel setup
  public width = 600;
  public height = 600;
  public items: Item[] = [
    {text: 'Pivo', fillStyle: '#b07547', id: 0},
    {text: 'Paddleboard', fillStyle: '#70d4c0', id: 1},
    {text: 'Limo', fillStyle: '#b7ad50', id: 2},
    {text: 'Koupačka', fillStyle: '#4579b8', id: 3},
    {text: 'Jídlo', fillStyle: '#887a74', id: 4},
    {text: 'Houpačka z mostu', fillStyle: '#eda0f1', id: 4},
    {text: 'Lodě', fillStyle: '#e2f1a0', id: 4},
  ];
  public textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  public textAlignment: TextAlignment = TextAlignment.CENTER;
  public idToLandOn: any;
  private seed = [...Array(this.items.length).keys()]

  ngOnInit() {
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
  }

  onSpin() {
    this.reset();
    if (this.wheel) {
      this.wheel.spin();
    }
  }

  private reset() {
    if (this.wheel) {
      this.wheel.reset()
    }
  }

  public before() {
    alert('Už se to točí!')
  }

  public after() {
    alert('Mrkej, co sis vylosoval.')
  }

}
