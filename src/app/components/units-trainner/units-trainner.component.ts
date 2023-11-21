import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api/api.service';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-units-trainner',
  standalone: true,
  imports: [CommonModule, FormsModule, MatProgressBarModule],
  templateUrl: './units-trainner.component.html',
  styleUrl: './units-trainner.component.css'
})

export class UnitsTrainnerComponent {
  quantity: number;
  loading: boolean = false

  constructor(
    private apiService: ApiService
  ){
    this.quantity = 0;
  }

  title = 'Qual período quer treinar?'

  radio = [
    ['Manhã', '06:00 às 12:00'],
    ['Tarde', '12:01 às 18:00'],
    ['Noite', '18:01 às 23:00']
  ];

  findUnit(){
    this.resultSearchApi();

    //this.dataForLocalization();
  }

  itensAlert = [
    {
      nome: 'Máscara',
      classe: 'mascara',
      imgRequired: '../../../assets/images/required-mask.png',
      required: 'Obrigatório',
      imgRecomend: '../../../assets/images/recommended-mask.png',
      alert: 'Recomendado'
    },

    {
      nome: 'Toalha',
      classe: 'toalha',
      imgRequired: '../../../assets/images/required-towel.png',
      required: 'Obrigatório',
      imgRecomend: '../../../assets/images/recommended-towel.png',
      alert: 'Recomendado'
    },

    {
      nome: 'Bebedouro',
      classe: 'bebedouro',
      imgPartial: '../../../assets/images/partial-fountain.png',
      alert: 'Parcial',
      imgProibied: '../../../assets/images/forbidden-fountain.png',
      proibied: 'Proibido'
    },

    {
      nome: 'Vestiários',
      classe: 'vestiarios',
      imgLibered: '../../../assets/images/required-lockerroom.png',
      libered: 'Liberado',
      imgPartial: '../../../assets/images/partial-lockerroom.png',
      alert: 'Parcial',
      imgClosed: '../../../assets/images/forbidden-lockerroom.png',
      closed: 'Fechado'
    }
  ];

  selectedPeriod: string = '';
  showClosedUnits: string = '';

  locations: any[] = []

  dataForLocalization() {
    console.log(this.selectedPeriod);
    console.log(this.showClosedUnits);
  }

  resultSearchApi(){
    this.loading = true;

    this.apiService.searchLocalizations().subscribe(
      (response) => {
        const data = response.response;

        this.locations = data.locations;
        console.log(this.locations);

        this.quantity = this.locations.length // Quantidade total

        this.loading = false;
      },
      (error) =>{
        console.error('Erro ao consultar Api:', error);
        this.loading = false;
      }
    );
  }
}
