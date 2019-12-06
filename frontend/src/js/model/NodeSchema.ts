import { BaseModel, Property, HasMany, HasOne, ApiEndpoint, ModelCollection } from 'front-model'
import { RequestOptions } from 'https'

export class NodeSchema extends BaseModel {

    @Property
    id?: string

    @Property
    type?: string

    @Property
    subType?: string

    @Property
    additionalIdentifier?: string

    @HasMany('NodeSchema')
    nodes!: ModelCollection<NodeSchema>

    @Property
    jsonValue?: {[id:string]: any}

    @Property
    numberValue?: number

    @ApiEndpoint('GET', {url: '/api/node-schema'})
    static index: (options?: RequestOptions) => Promise<ModelCollection<NodeSchema>>

    @ApiEndpoint('POST', {url: '/api/node-schema'})
    create!: (options?: RequestOptions) => Promise<NodeSchema|null>

}