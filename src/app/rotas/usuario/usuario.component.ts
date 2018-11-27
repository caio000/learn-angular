import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {

    public id;
    public pagina: number;
    public usuarios: Array<Usuario>;
    private querySubscription: Subscription;

  constructor(
      private usuarioService: UsuarioService,
      private route: ActivatedRoute,
      private router: Router,
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params: any) => {
          this.id = params['id'];
      });

      this.querySubscription = this.route.queryParams.subscribe((params: any) => {
          this.pagina = params.pagina;
      });
      console.log(this.getRouteId());
      console.log(this.id);

      this.usuarios = this.usuarioService.getAll();
  }

  ngOnDestroy() {
      this.querySubscription.unsubscribe();
  }

  getRouteId() {
      return this.route.snapshot.params['id'];
  }

  nextPage(): void {
      this.router.navigate(['usuarios'], {
          queryParams: { 'pagina': ++this.pagina },
      });
  }

  previousPage(): void {
      this.router.navigate(['/usuarios'], {
          queryParams: { 'pagina': --this.pagina },
      });
  }

}
