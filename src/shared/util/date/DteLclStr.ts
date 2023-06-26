export interface FormatoInterface {
  year?: string;
  month?: string;
  day?: string;
  hour?: string;
  minute?: string;
  second?: string;
  hour12?: boolean;
}

export class DteLclStr {
  private static formato: FormatoInterface = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  public static toEsPe(dte: Date, formato: any = {}) {
    return dte.toLocaleString('es-PE', { ...DteLclStr.formato, ...formato });
  }
}
