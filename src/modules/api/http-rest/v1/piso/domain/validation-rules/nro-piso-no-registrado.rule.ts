import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ExistsNroPisoService } from '@api/v1/piso/domain/service/exists-nro-piso/exists-nro-piso.service';

@ValidatorConstraint({ name: 'nroPisoNoRegistradoConstraint', async: true })
@Injectable()
export class NroPisoNoRegistradoConstraint
  implements ValidatorConstraintInterface
{
  constructor(private existsNroPisoService: ExistsNroPisoService) {}

  validate(nro: string): Promise<boolean> {
    return this.existsNroPisoService.validar(nro);
  }

  defaultMessage(args: ValidationArguments): string {
    const object: any = args.object as any;
    return `El piso con nro. ${object.nro} actualmente está registrado.`;
  }
}

export function NroPisoNoRegistrado(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'nroPisoNoRegistrado',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: NroPisoNoRegistradoConstraint,
    });
  };
}
