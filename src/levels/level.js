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
    
    static moveToScene(sceneName) {
        this.scene_active = sceneName
    }
}

/**
 * https://www.javascripttutorial.net/javascript-queue/
 **/