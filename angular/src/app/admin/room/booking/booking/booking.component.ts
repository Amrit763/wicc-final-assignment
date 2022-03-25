import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
// room:any;
  constructor(
    // public dashboardService: ServiceService
  ) { }

  ngOnInit(): void {
    // this.dashboardService.subjectB.subscribe(res=>{
    //   this.room=res;
    //   console.log('here booking ma ',res)
    // })
  }

}
