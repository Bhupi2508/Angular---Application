import { Component, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from '../../services/userServices/user-services.service'
import { EventEmitter } from 'events';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  imagesUrl: string[];
  details: any;
  releaseDate: any;
  moviename: any;
  rating: any;
  arr = [];
  @Output() moviesList = new EventEmitter()

  constructor(private service: UserServicesService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.imagesUrl = [
      "../../../assets/ant-man-5.jpg",
      "../../../assets/venom-3.jpg",
      "../../../assets/HarryPotter-2.jpg",
      "../../../assets/captain-2.jpg",
      "../../../assets/blackPanther-1.jpg"
    ];
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  profile() {
    this.router.navigateByUrl('profile');
  }

  movies() {
    console.log("egertfS");
    
    this.service.get('getMovieDetail').subscribe((result: any) => {

      console.log("response data==>", result);
      this.moviesList.emit(result.message)
      // this.moviename = result.message.moviename
      // this.rating = result.message.rating
      // this.releaseDate = result.message.releaseDate
      // this.details = result.message.details
      // localStorage.setItem('firstname', this.firstname)
      // localStorage.setItem('lastname', this.lastname)
      // localStorage.setItem('email', this.emailAddress)
      // this.snackbar.open('Registration Successfull', 'End now', { duration: 1000 });
      this.router.navigateByUrl('movieDetail')
    })
  }
}