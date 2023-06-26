import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ExistsGrupoComidaService } from '../service/exists-grupo-comida/exists-grupo-comida.service';

@ValidatorConstraint({ name: 'grupoComidaExisteConstraint', async: true })
@Injectable()
export class GrupoComidaExisteConstraint
  implements ValidatorConstraintInterface
{
  constructor(private existsGrupoComidaService: ExistsGrupoComidaService) {}

  async validate(id: number): Promise<boolean> {
    return await this.existsGrupoComidaService.validar(id);
  }

  defaultMessage(): string {
    return 'El grupo de comida no existe.';
  }
}

export function GrupoComidaExiste(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'grupoComidaExiste',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: GrupoComidaExisteConstraint,
    });
  };
}
