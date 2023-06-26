import { Code } from 'src/shared/code/Code';

export class UseCaseErrResponseFmt {
  static format(errExcp: any) {
    const arrMsg = [];

    if (errExcp.name === 'QueryFailedError') {
      // TODO Implementar Logger
      arrMsg.push('Ocurrió un error en la operación');
    } else {
      errExcp.data.errors
        .map((error) => error.message)
        .forEach((arr) => arrMsg.push(...arr));
    }

    return {
      statusCode: Code.BAD_REQUEST_ERROR.code,
      message: arrMsg,
      error: Code.BAD_REQUEST_ERROR.message,
    };
  }
}
