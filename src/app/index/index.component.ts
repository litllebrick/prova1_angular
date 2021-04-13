import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private formsBuilder: FormBuilder) { }

  formulario: FormGroup
  vetorPalavras = []
  palavraCadastrada = false
  ngOnInit() {
    this.formulario = this.formsBuilder.group({
      palavra: [null, Validators.required],
      significado: [null, Validators.required],
    })
  }

  save() {
    if (this.formulario.valid && !this.palavraCadastrada) {
      this.vetorPalavras.push(this.formulario.value)
      this.formulario.reset()
      this.palavraCadastrada = false
    }
  }

  get f() {
    return this.formulario.controls
  }

  testaPalavra(event) {
    this.vetorPalavras.forEach(element => {
      if (element.palavra == event) {
        this.palavraCadastrada = true
      } else {
        this.palavraCadastrada = false
      }
    });
  }
}
