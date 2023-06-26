import { Injectable } from '@nestjs/common';
import { ExistsNroMesaEnPisoService } from '../service/exists-nro-mesa/exists-nro-mesa.service';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({
  name: 'nroMesaNoRegistradoEnPisoConstraint',
  async: true,
})
@Injectable()
export class NroMesaNoRegistradoEnPisoConstraint
  implements ValidatorConstraintInterface
{
  constructor(private existsNroMesaEnPisoService: ExistsNroMesaEnPisoService) {}

  async validate(nro: string, args: ValidationArguments): Promise<boolean> {
    const idPiso: number = (args.object as any)['fk_piso'];
    const existeMesa = await this.existsNroMesaEnPisoService.validar(
      nro,
      idPiso,
    );

    return existeMesa === false;
  }

  defaultMessage(args: ValidationArguments) {
    const object: any = args.object as any;
    return `La mesa ${object.nro} ya existe en el piso ${object.fk_piso}.`;
  }
}

export function NroMesaNoRegistradoEnPiso(
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'nroMesaNoRegistradoEnPiso',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: NroMesaNoRegistradoEnPisoConstraint,
    });
  };
}
