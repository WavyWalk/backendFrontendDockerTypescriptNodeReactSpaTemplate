import { NodeSchema } from './NodeSchema';
import { ModelRegistry } from "front-model";

export class ModelRegistrator {
    static run() {
        ModelRegistry.registeredModels = {
            NodeSchema,
        }
    }
}