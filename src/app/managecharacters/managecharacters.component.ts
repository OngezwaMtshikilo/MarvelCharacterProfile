import { Component, OnInit } from '@angular/core';
import { CharacterdataService } from '../characterdata.service';
import { Subscription } from 'rxjs';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-managecharacters',
  templateUrl: './managecharacters.component.html',
  styleUrls: ['./managecharacters.component.css']
})
export class ManagecharactersComponent implements OnInit {
  loadCharactersSub: Subscription;
  characters: any;
  selectedCharacter: any;
  chart = [];
  lbl = ["DATA1","DATA2"];
  storyCnt = []
  comicCnt = []
  constructor(private dataService: CharacterdataService) { }

  ngOnInit() {
    
  }

  ngOnDestroy(): void {
    if(this.loadCharactersSub)
    {
      this.loadCharactersSub.unsubscribe();
    }
  }

  loadCharacters()
  {
    this.loadCharactersSub = this.dataService.getCharacters().subscribe(
      data => {
        this.characters = data;
        console.log(data.data.results, 'charecters 1......');
        
      console.log(this.characters, 'charecters......');
      });
  }
  onSelect(character:any): void {
    this.selectedCharacter = character;
    console.log(this.selectedCharacter, 'select character')
    this.loadChart(character);
  }

  loadChart(character: any)
  {
   console.log(character.stories.available, 'inside chart')
  this.storyCnt.push(character.stories.available)
  this.comicCnt.push(character.comics.available)
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.lbl,
        datasets: [
          {
            data: this.storyCnt,
            borderColor: '#3cba9f',
            fill: false,
            label:'DATA1'            
          },
            {
              data: this.comicCnt,
              borderColor: '#ffa500',
              fill: false,
              label:'DATA2'
            }
        ]
      },
      options: {
        legend: {
          display: true,
          position:'bottom'
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
