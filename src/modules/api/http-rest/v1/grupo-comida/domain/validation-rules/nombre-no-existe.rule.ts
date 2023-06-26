import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ExistsNombreService } from '../service/exists-nombre/exists-nombre.service';

@ValidatorConstraint({ name: 'nombreNoExisteConstraint', async: true })
@Injectable()
export class NombreNoExisteConstraint implements ValidatorConstraintInterface {
  constructor(private existsNombreService: ExistsNombreService) {}

  async validate(nombre: string): Promise<boolean> {
    const existeNombre = await this.existsNombreService.validar(nombre);
    return existeNombre === false;
  }

  defaultMessage(): string {
    return 'El nombre "$value" está en uso.';
  }
}

export function NombreNoExiste(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'nombreNoExiste',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: NombreNoExisteConstraint,
    });
  };
}
