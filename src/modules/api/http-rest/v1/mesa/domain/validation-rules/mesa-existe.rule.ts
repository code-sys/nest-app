import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ExistsMesaService } from '../service/exists-piso/exists-mesa.service';

@ValidatorConstraint({ name: 'mesaExisteConstraint', async: true })
@Injectable()
export class MesaExisteConstraint implements ValidatorConstraintInterface {
  constructor(private existsMesaService: ExistsMesaService) {}

  async validate(id: number): Promise<boolean> {
    return await this.existsMesaService.validar(id);
  }

  defaultMessage(): string {
    return `La mesa no existe.`;
  }
}

export function MesaExiste(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'mesaExiste',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: MesaExisteConstraint,
    });
  };
}
