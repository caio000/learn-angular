import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

    public favorite: boolean;

  constructor(
      private ele: ElementRef,
  ) {
      this.favorite = false;
  }

  ngOnInit() {
  }

  private getStars(): Array<HTMLElement> {
    return this.ele.nativeElement.querySelectorAll('.star');
  }

  favoriteOnClick(value: number): void {
      this.clearStar();
      const stars = this.getStars();
      for (let i = 0; i < value; i++) {
          const element = stars[i];
          element.className = 'star fas fa-star text-warning';
      }
      this.favorite = !this.favorite;
  }

  private clearStar(): void {
    const starts = this.getStars();
    starts.forEach(star => {
        star.className = 'star far fa-star';
    });
  }

}
