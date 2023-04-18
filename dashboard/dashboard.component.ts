import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  showFiller = false;

  onConfirm(content: any, pid: any, pname: any) {
    // this.patronid = pid;
    // this.name = pname;
    // console.log(this.name, this.patronid);
    // this.modalService.open(content).result.then((result)=>{
    //   if(result==1){
    //     this.onDelete();
    //   }
    // });
  }

  onDelete() {
    // this.call.delPatron(this.patronid).subscribe((result: any) => {
    //   this.patrons = result;
    // });
  }
}
