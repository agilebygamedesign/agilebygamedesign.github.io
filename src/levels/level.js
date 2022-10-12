import { Actor } from "../players/actor"


export class Level {
    constructor(){
        this.actors = {}
    }
    
    addActor(name, actor) {
        this.actors[name] = actor
    }
}

/**
 * https://www.javascripttutorial.net/javascript-queue/
 **/