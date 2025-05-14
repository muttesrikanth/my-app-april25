import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  mailData:any=[]
constructor(private _mailservice:MailService){
_mailservice.getMails().subscribe((data)=>{
  this.mailData=data
},(err)=>{
  alert("Internal server error")
})
}
}
