export enum PlayerType {
    BASKET = "basket",
    FOOT = "foot",
    TENNIS = "tennis",
}

export interface IPlayerProperties {
    imageUrl: string;
    color: string;
}

export const PlayerTypeProperties : {[key: string]: IPlayerProperties} = {
    [PlayerType.BASKET]:{
        imageUrl:'assets/img/basketball.png',
        color: 'rgba(235, 227, 176, 0.8)'
    },
    [PlayerType.FOOT]:{
        imageUrl:'assets/img/football.png',
        color: 'rgba(234, 234, 234, 0.8)'
    },
    [PlayerType.TENNIS]:{
        imageUrl:'assets/img/tennis.png',
        color: 'rgba(150, 195, 238, 0.8)'
    }

}