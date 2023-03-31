import { LEVELS } from "./levels.enum";

export class Task {
    name = ''
    description = '';
    completed = false
    level = LEVELS.NORMAL
    
    constructor(name: string, description: string, completed: boolean, level: LEVELS) {
        this.name = name
        this.description = description
        this.completed = completed
        this.level = level
    }
}