import { Actor } from "../players/actor"


export class Level {
    constructor(){
        this.actors = {}
        this.scenes = {}
        this.scene_active = ""
    }
    
    loadScene(sceneName, sceneObject) {
        this.scenes[sceneName] = m(sceneObject)
    }

    addActor(actorName, actorObject) {
        this.actors[actorName] = actorObject
    }
    
    static moveToScene(sceneObject) {
        this.scene_active = sceneObject
    }
}

/**
 * https://www.javascripttutorial.net/javascript-queue/
 **/
