import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil-evento',
  templateUrl: './perfil-evento.page.html',
  styleUrls: ['./perfil-evento.page.scss'],
})
export class PerfilEventoPage implements OnInit {

  protected evento:any;
  

  constructor(
    public eventoService: EventoService,
    public activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
  
  }

}
