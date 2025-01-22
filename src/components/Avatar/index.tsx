import styles from "./styles.module.css";

interface Props extends React.ComponentProps<"img"> {
  src: string;
  hasBorder?: boolean;
  hasOutline?: boolean;
  size?: "default" | "md" | "lg";
}

export function Avatar({
  src,
  hasBorder = true,
  hasOutline = true,
  size = "default",
  ...rest
}: Props) {
  return (
    <img
      className={`
        ${styles.avatar} 
        ${hasBorder && styles.border} 
        ${hasOutline && styles.outline}
        ${size === "md" ? styles.md : size === "lg" && styles.lg}
        `}
      src={src}
      {...rest}
    />
  );
}
