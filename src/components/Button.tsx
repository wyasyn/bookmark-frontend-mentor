interface ButtonProps {
  text: string;
  secondary?: boolean;
  destructive?: boolean;
}

export default function Button({ text, secondary, destructive }: ButtonProps) {
  return (
    <button
      className={`px-4 duration-300 ease-in-out py-2 border border-transparent rounded-md w-fit ${
        secondary
          ? "shadow-md hover:border-foreground hover:text-foreground hover:shadow-none"
          : destructive
          ? "bg-destructive text-background hover:border-destructive hover:text-destructive hover:bg-background"
          : " bg-primary text-background hover:bg-background hover:text-primary hover:border-primary"
      }`}
    >
      {text}
    </button>
  );
}
