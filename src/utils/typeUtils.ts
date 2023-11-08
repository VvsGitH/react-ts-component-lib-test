export type ArrayElement<Arr extends readonly unknown[]> = Arr extends readonly (infer Element)[] ? Element : never;
