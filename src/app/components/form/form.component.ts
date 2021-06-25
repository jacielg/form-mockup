import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Company {
  value: string;
  viewValue: string;
}

interface Building {
  value: string;
  viewValue: string;
}

interface Level {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  causeOfDisabilityList: string[] = ['Otras', 'Sospecha de COVID-19'];
  disabilityStatusList: string[] = ['Si', 'No'];
  disabilityReinstatementList: string[] = ['Si', 'No Aplica'];
  disabilityList: string[] = ['Activa', 'Inactiva']
  genderList: string[] = ['Hombre', 'Mujer'];
  kitList: string[] = ['Entregado', 'Pendiente', 'No Aplica'];

  companyList: Company[] = [
    { value: 'affisa', viewValue: 'Affisa' },
    { value: 'ahm', viewValue: 'AHM' },
    { value: 'alorica', viewValue: 'Alorica' },
    { value: 'altara', viewValue: 'Altara' },
    { value: 'altia', viewValue: 'Altia' },
    { value: 'apexAmerica', viewValue: 'Apex America' },
    { value: 'aplLogistis', viewValue: 'APL Logistics' },
    { value: 'chevron', viewValue: 'Chevron' },
    { value: 'codeExitos', viewValue: 'Code Exitos' },
    { value: 'concentrix', viewValue: 'Concentrix' },
    { value: 'consultoresAsesoresSeguros', viewValue: 'Consultores y Asesores Seguros' },
    { value: 'emergeBPO', viewValue: 'Emerge BPO' },
    { value: 'ernstYoung', viewValue: 'Ernst Young' },
    { value: 'foodZen', viewValue: 'FoodZen' },
    { value: 'gbm', viewValue: 'GBM' },
    { value: 'grupoKarmis', viewValue: 'Grupo Karims' },
    { value: 'interpretia', viewValue: 'Interpretia' },
    { value: 'km2', viewValue: 'KM2' },
    { value: 'kyg', viewValue: 'KyG' },
    { value: 'levanter', viewValue: 'Levanter' },
    { value: 'moviltec', viewValue: 'Moviltec' },
    { value: 'otrosProveedorContratista', viewValue: 'Otros - Proveeder/Contratista' },
    { value: 'otrosVisita', viewValue: 'Otros - Visita' },
    { value: 'partnerHero', viewValue: 'Partner Hero' },
    { value: 'rustico', viewValue: 'Rustico' },
    { value: 'seijiroYazawaIwai', viewValue: 'Seijuro Yazawa Iwai' },
    { value: 'startek', viewValue: 'Startek' },
    { value: 'tigo', viewValue: 'Tigo' },
    { value: 'zeroVariance', viewValue: 'Zero Variance' },
  ];

  buildingList: Building[] = [
    { value: 'torre1', viewValue: 'Torre 1' },
    { value: 'torre2', viewValue: 'Torre 2' },
    { value: 'torre3', viewValue: 'Torre 3' },
    { value: 'torreGk', viewValue: 'Torre GK' },
    { value: 'edificioRecursosHumanos', viewValue: 'Edificio Recursos Humanos' },
    { value: 'recZen', viewValue: 'RecZen' },
    { value: 'postaSeguridad', viewValue: 'Posta Seguridad' },
    { value: 'edificioMantenimiento', viewValue: 'Torre 3' },
    { value: 'altara', viewValue: 'Altara' },
    { value: 'noAplica', viewValue: 'No Aplica' },
  ];

  levelList: Level[] = [
    { value: 'uf', viewValue: 'UF' },
    { value: 'lobby', viewValue: 'Lobby' },
    { value: 'nivel1', viewValue: 'Nivel 1' },
    { value: 'nivel2', viewValue: 'Nivel 2' },
    { value: 'nivel3', viewValue: 'Nivel 3' },
    { value: 'nivel4', viewValue: 'Nivel 4' },
    { value: 'nivel5', viewValue: 'Nivel 5' },
    { value: 'nivel6', viewValue: 'Nivel 6' },
    { value: 'nivel7', viewValue: 'Nivel 7' },
    { value: 'nivel8', viewValue: 'Nivel 8' },
    { value: 'nivel9', viewValue: 'Nivel 9' },
    { value: 'nivel10', viewValue: 'Nivel 10' },
    { value: 'nivel11', viewValue: 'Nivel 11' },
    { value: 'nivel12', viewValue: 'Nivel 12' },
    { value: 'nivel13', viewValue: 'Nivel 13' },
    { value: 'nivel14', viewValue: 'Nivel 14' },
    { value: 'noAplica', viewValue: 'No Aplica' },
  ];

  barcodeControl = new FormControl('');
  numIdControl = new FormControl('');
  phoneControl = new FormControl('');
  genderControl = new FormControl(this.kitList[0]);
  ageControl = new FormControl('');
  companyControl = new FormControl(this.companyList[0].value);
  buildingControl = new FormControl(this.buildingList[0].value);
  levelControl = new FormControl(this.levelList[0].value);
  kitControl = new FormControl(this.kitList[0]);
  bodyTemperatureControl = new FormControl('');
  disabilityControl = new FormControl(this.disabilityList[0]);
  disabilityReinstatementControl = new FormControl(this.disabilityReinstatementList[0]);
  disabilityStatusControl = new FormControl(this.disabilityStatusList[0]);
  numberOfDisabilityDaysControl = new FormControl('');
  causeOfDisabilityControl = new FormControl(this.causeOfDisabilityList[0]);
  causeOfSuspicionControl = new FormControl('');

  constructor() {
    this.form = new FormGroup({
      barcode: this.barcodeControl,
      numId: this.numIdControl,
      phone: this.phoneControl,
      selectedGender: this.genderControl,
      age: this.ageControl,
      company: this.companyControl,
      building: this.buildingControl,
      level: this.levelControl,
      selectedKit: this.kitControl,
      bodyTemperature: this.bodyTemperatureControl,
      selectedDisability: this.disabilityControl,
      selectedDisabilityReinstatement: this.disabilityReinstatementControl,
      selectedDisabilityStatus: this.disabilityStatusControl,
      numberOfDisabilityDays: this.numberOfDisabilityDaysControl,
      selectedCauseOfDisability: this.causeOfDisabilityControl,
      causeOfSuspicion: this.causeOfSuspicionControl
    });
  }

  ngOnInit(): void {
    //TODO: Get data from Backend Service.
  }

}
