import { Component, Input, InputSignal, input, computed } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerTypeProperties } from '../../utils/player.utils';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})

export class PlayingCardComponent {
  player = input (new Player());
  playerTypeIcon = computed(()=> {
    return PlayerTypeProperties[this.player().type].imageUrl;
  });

  backgroundColor = computed(()=> {
    return PlayerTypeProperties[this.player().type].color;
  });

}
