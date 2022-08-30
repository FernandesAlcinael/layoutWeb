import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  client: Client ={
    name: '',
    email: '' ,
    text: ''
  }

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

createForm(): void{
this.clientService.create(this.client).subscribe(() => {
  this.clientService.showMessage('Mensagem enviada!')
  this.router.navigate(['/'])
  })
}
}
