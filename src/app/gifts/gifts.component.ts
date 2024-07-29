import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.css'
})
export class GiftsComponent {

constructor(private authService: AuthService){}
jeweleryUrl = "category/jewelery"

jeweleryData : any;

ngOnInit() {
  
this.authService.getDataFromServer(this.jeweleryUrl).subscribe({
  next: res => {
    this.jeweleryData = res
    console.log(res[0],'res')
  },
  error: err => {
    console.log(err);
  }
  })

}
}
