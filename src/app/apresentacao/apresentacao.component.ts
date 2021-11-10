import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements OnInit {

  @Input() message!: string;
  @Input() contador: number = 0;
  @Output() selecionado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ShowSelecionado1() {
    this.contador++;
    this.selecionado.emit(this.contador);
  }

  ShowSelecionado2() {
    this.contador--;
    this.selecionado.emit(this.contador);
  }

}
