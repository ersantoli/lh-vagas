import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-muaral-vagas',
  templateUrl: './muaral-vagas.component.html',
  styleUrls: ['./muaral-vagas.component.css']
})
export class MuaralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];//array vazio

  constructor( private _vagasService: VagasService) { }

  ngOnInit(): void {

    this.listarVagas();
  }
listarVagas(){
  this._vagasService.getVagas().subscribe(
    retornaVaga =>{
      this.vagas = retornaVaga.map(
        item =>{
          return new Vaga(
            item.id,
            item.nome,
            item.foto,
            item.descricao,
            item.salario
          );
        }
      )
    }
  );
}


}
