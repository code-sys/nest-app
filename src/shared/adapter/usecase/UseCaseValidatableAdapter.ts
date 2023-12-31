import { Code } from '@shared/code/Code';
import { Exception } from '@shared/exception/Exception';
import { Optional } from '@shared/type/CommonTypes';
import {
  ClassValidationDetails,
  ClassValidator,
} from '@shared/util/class-validator/ClassValidator';

export class UseCaseValidatableAdapter {
  public async validate(): Promise<void> {
    const details: Optional<ClassValidationDetails> =
      await ClassValidator.validate(this);

    if (details) {
      throw Exception.new({
        code: Code.USE_CASE_PORT_VALIDATION_ERROR,
        data: details,
      });
    }
  }
}
