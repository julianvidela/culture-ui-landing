

export type ResponsiveValue<T extends string> =
  | T
  | ({
      base?: T;
    } & {
      [breakpoint: string]: T;
    });

export const resolveResponsiveClass = <T extends string>(
  value: ResponsiveValue<T> | undefined,
  map: Record<T, string>
): string => {
  if (!value) return "";

  if (typeof value === "string") return map[value];

  return Object.entries(value)
    .map(([breakpoint, val]) =>
      breakpoint === "base" ? map[val] : `${breakpoint}:${map[val]}`
    )
    .join(" ");
};
