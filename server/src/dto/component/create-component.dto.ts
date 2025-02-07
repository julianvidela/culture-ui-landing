import { IsString, IsArray, IsOptional, ValidateNested, ArrayMinSize, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

class PropertyDto {
  @IsString()
  prop: string;

  @IsString()
  type: string;

  @IsString()
  description: string;
}

export class CreateComponentDto {
  @IsString() 
  name: string;

  @IsString() 
  description: string;

  @IsString() 
  slug: string;

  @IsString()
  installationCli: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PropertyDto)
  @ArrayMinSize(1) // Asegura que al menos haya una propiedad en el array
  properties: PropertyDto[];

  
  @IsString()
  usageExample: string;

  @IsString() 
  advancedUsage: string;

  @IsString() 
  imageURL: string;

  @IsBoolean()
  isPremium: boolean;
}