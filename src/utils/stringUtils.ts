/**
 * Genera una stringa di classNames compatibile con l'attributo className HTML
 * @param classes Array di classi da mappare
 * @returns stringa formattata di classi
 */
export function classNames(
  ...classes: (null | undefined | false | string | Record<string, boolean | undefined>)[]
): string | undefined {
  if (!classes?.length) return undefined;
  return classes
    .filter((cs) => !!cs) // filtering out empty or null classes
    .map((cs) =>
      typeof cs !== "object"
        ? // if the class is a string, simply return it
          cs
        : // if the class is an object, extract classes from its keys, but only if the associated value is equal to true
          Object.entries(cs!)
            .filter(([, value]) => !!value)
            .map(([key]) => key)
            .join(" ")
    )
    .join(" ");
}
