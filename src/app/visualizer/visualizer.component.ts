import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InputDataService } from '../start/inputData.service';
import { DataModel } from '../DataArray.model';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit, OnDestroy {
  dataArraySub = new Subscription;
  dataJSONArray: [DataModel] = [{ name: 0, value: 0 }];
  dataPoints = [
    { name: "Apple", value: 10 },
    { name: "Orange", value: 15 },
    { name: "Banana", value: 25 },
    { name: "Mango", value: 30 },
    { name: "Grape", value: 28 }
  ]

  view: [number, number] = [700, 600];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Inputs';
  showYAxisLabel = true;
  yAxisLabel = 'Value';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private inputDataService: InputDataService) { }

  ngOnInit(): void {
    this.dataArraySub = this.inputDataService.dataJSONArrayChanged.subscribe((dataJSONArray: [DataModel]) => {
      dataJSONArray = [new DataModel(dataJSONArray['name'], dataJSONArray['value'])]
      this.dataJSONArray = dataJSONArray;
      console.log(this.dataJSONArray);
    }
    )
  }
  onGetArray([DataModel]){

  }


  ngOnDestroy(): void {
    this.dataArraySub.unsubscribe();
  }
}
