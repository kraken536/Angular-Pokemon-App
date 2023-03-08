export class Pokemon{

    id!: number;
    hp!: number;
    cp!: number;
    name!: string;
    picture!: string;
    types!: string[];
    created!: Date;  
    
    constructor(
        name: string = "Enter a name",
        hp = 100,
        cp = 10,
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        types: string[] = ["normal"],
        created: Date = new Date()
        ){
            this.name = name;
            this.hp = hp;
            this.cp = cp;
            this.picture = picture;
            this.types = types;
            this.created = created; 
        }
    
}