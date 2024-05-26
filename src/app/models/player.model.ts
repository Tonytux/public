import { PlayerType } from "../utils/player.utils";

export class Player {
    name: string = "Player";
	image: string ="assets/img/vince_carter.jpg";
	type: PlayerType = PlayerType.BASKET;
	age: number = 40;
	figureCaption: string = "N°15 Player"
	attackName: string = "Pseudo"
	attackStrength: number = 15;
	attackDescription: string = "Description";
}