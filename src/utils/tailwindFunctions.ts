export const tw = (strings: TemplateStringsArray, ...values: String[]) =>
  String.raw({ raw: strings }, ...values);
