export const textVariants = {
  variant: {
    body: "app-text--body",
    heading: "app-text--heading",
    subheading: "app-text--subheading",
    caption: "app-text--caption",
    label: "app-text--label",
    code: "app-text--code",
  },
  color: {
    default: "app-text--default",
    heading: "app-text--heading-color",
    muted: "app-text--muted",
    accent: "app-text--accent",
  },
} as const;

export type TextVariant = keyof typeof textVariants.variant;
export type TextColor = keyof typeof textVariants.color;
