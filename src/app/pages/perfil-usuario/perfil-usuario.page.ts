import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  protected usuario:any;
  private key:string;

  constructor(
    public usuarioService: UsuarioService,
    public activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
   this.key = this.activatedRouter.snapshot.paramMap.get("key");
   this.usuario = this.usuarioService.get(this.key);
  }

}
