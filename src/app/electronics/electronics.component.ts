import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {

constructor(private authService: AuthService){}

electronicsUrl = "category/electronics"

electronicsData : any;
ngOnInit() {
  
this.authService.getDataFromServer(this.electronicsUrl).subscribe({
  next: res => {
    this.electronicsData = res
    console.log(res[0],'res')
  },
  error: err => {
    console.log(err);
  }
  })

}
}
