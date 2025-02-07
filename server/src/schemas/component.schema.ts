import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// clase anidada
class Property {
  @Prop({ required: true })
  prop: string;

  @Prop({ required: true })
  type: string;

  @Prop()
  description: string;
}

@Schema({ timestamps: true })
export class Component extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true})
  installationCli: string;

  @Prop({ type: [Property], required: true })
  properties: Property[];

  @Prop()
  usageExample: string;

  @Prop()
  advancedUsage: string;

  @Prop()
  imageURL: string;

  @Prop({default: false})
  isPremiun: boolean;
}

export const ComponentSchema = SchemaFactory.createForClass(Component);