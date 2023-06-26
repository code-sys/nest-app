import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ExistsPisoService } from '@api/v1/piso/domain/service/exists-piso/exists-piso.service';

@ValidatorConstraint({ name: 'pisoExisteConstraint', async: true })
@Injectable()
export class PisoExisteConstraint implements ValidatorConstraintInterface {
  constructor(private existsPisoService: ExistsPisoService) {}

  async validate(id: number): Promise<boolean> {
    return await this.existsPisoService.validar(id);
  }

  defaultMessage(): string {
    return `El piso no existe.`;
  }
}

export function PisoExiste(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'pisoExiste',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: PisoExisteConstraint,
    });
  };
}
