import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.component.html',
  styleUrl: './apparel.component.css'
})
export class ApparelComponent {

  constructor(private authService: AuthService){}

apparelUrl = ""

apparelData : any;
ngOnInit() {
  
this.authService.getDataFromServer(this.apparelUrl).subscribe({
  next: res => {
    this.apparelData = res.filter( (data: { category: string | string[]; }) => data.category.includes('clothing'))
    console.log(res[0],'res')
  },
  error: err => {
    console.log(err);
  }
  })

}
}
