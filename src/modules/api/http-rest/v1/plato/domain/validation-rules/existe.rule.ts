import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ExistsPisoService } from '@api/v1/piso/domain/service/exists-piso/exists-piso.service';

@ValidatorConstraint({ name: 'mesaExisteConstraint', async: true })
@Injectable()
export class MesaExisteConstraint implements ValidatorConstraintInterface {
  constructor(private existsPisoService: ExistsPisoService) {}

  async validate(id: number): Promise<boolean> {
    return await this.existsPisoService.validar(id);
  }

  defaultMessage(): string {
    return `El piso no existe.`;
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
