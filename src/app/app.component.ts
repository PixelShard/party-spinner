import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Item, NgxWheelComponent, TextAlignment, TextOrientation } from "ngx-wheel";

export interface FullItem extends Item {
  textFontSize?: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(NgxWheelComponent, {static: false})
  wheel: NgxWheelComponent | undefined;

  title = 'party-spinner';
  // ngx-wheel setup
  public width = 600;
  public height = 600;
  public items: FullItem[] = [
    {text: 'Pivo', fillStyle: '#b07547', id: 0, textFontSize: 16},
    {text: 'Paddleboard', fillStyle: '#70d4c0', id: 1, textFontSize: 16},
    {text: 'Limo', fillStyle: '#b7ad50', id: 2, textFontSize: 16},
    {text: 'Koupačka', fillStyle: '#4579b8', id: 3, textFontSize: 16},
    {text: 'Jídlo', fillStyle: '#887a74', id: 4, textFontSize: 16},
    {text: 'Houpačka', fillStyle: '#eda0f1', id: 4, textFontSize: 16},
    {text: 'Lodě', fillStyle: '#e2f1a0', id: 4, textFontSize: 16},
  ];
  public textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  public textAlignment: TextAlignment = TextAlignment.CENTER;
  public idToLandOn: any;
  private seed = [...Array(this.items.length).keys()]
  private innerWidth: any;

  ngOnInit() {
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    this.setInnerWidth();
  }

  setInnerWidth() {
    this.innerWidth = window.innerWidth;
    this.width = innerWidth < this.width ? innerWidth : 600;
    this.height = this.width;
  }

  onSpin() {
    this.reset().then(res => {
        this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
        if (this.wheel) {
          this.wheel.spin();
        }
      }
    );
  }

  private reset(): Promise<boolean> {
    return new Promise((resolve) => {
      if (this.wheel) {
        this.wheel.reset()
        resolve(true);
      }
      resolve(false);
    });
  }

  public before() {
    alert('Už se to točí!')
  }

  public after() {
    alert('Mrkej, co sis vylosoval.')
  }

}
