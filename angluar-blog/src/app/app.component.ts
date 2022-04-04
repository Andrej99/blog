import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  scroll =  false;
  title = 'Angular blog';


 
//TODO implement with rxjs + add loading of posts depending on scroll position
  onScrooll():void{
    if (window.pageYOffset > 45){
      this.scroll = true;
    }else{
      this.scroll = false;
    }
  }

}
