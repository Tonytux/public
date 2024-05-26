import { CommonModule } from '@angular/common';
import { Component, computed, effect, model, signal } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Player } from './models/player.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PlayerType } from './utils/player.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl : './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

    players!: Player[];
    search = model("");

    filteredPlayers = computed(()=> {
      return this.players.filter(player => player.name.includes(this.search()));
    })
   

    selectedPlayerIndex = signal(1);
    selectedPlayer = computed(() => {
      return this.players[this.selectedPlayerIndex()];
    });

    constructor () {

      effect(()=> {
        console.log(this.selectedPlayer());
      })

      this.players = [];

      const player1 = new Player();
      player1.name = "Zidane";
      player1.image = "assets/img/zidane.jpg";
      player1.type = PlayerType.FOOT;
      player1.age = 51;
      player1.figureCaption = "N°10";
      player1.attackDescription = "Zizou";
      this.players.push(player1);

      const player2 = new Player();
      player2.name = "Vince Carter";
      player2.image = "assets/img/vince_carter.jpg";
      player2.type = PlayerType.BASKET;
      player2.age = 47;
      player2.figureCaption = "N°15";
      player2.attackDescription = "Half Man Half Amazing";
      this.players.push(player2);

      const player3 = new Player();
      player3.name = "Roger Federer";
      player3.image = "assets/img/federer.jpg";
      player3.type = PlayerType.TENNIS;
      player3.age = 42;
      player3.figureCaption = "N°1";
      player3.attackDescription = "Rodge";
      this.players.push(player3);

      const player4 = new Player();
      player4.name = "Messi";
      player4.image = "assets/img/messi.jpg";
      player4.type = PlayerType.FOOT;
      player4.age = 36;
      player4.figureCaption = "N°10";
      player4.attackDescription = "La Pulga";
      this.players.push(player4);
    }

    togglePlayer() {
      this.selectedPlayerIndex.set( (this.selectedPlayerIndex() + 1) % this.players.length);
    }

}
