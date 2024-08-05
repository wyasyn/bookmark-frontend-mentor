import { useData } from "@/context/toogle";
import { BookmarkIcon } from "lucide-react";

export default function Logo({ footer }: { footer?: boolean }) {
  const { open } = useData();
  return (
    <a
      href="#"
      className={` flex items-center text-lg font-medium tracking-wider gap-3 ${
        open || footer ? "text-background" : "text-foreground"
      } `}
    >
      <span
        className={`  aspect-square rounded-full p-2 ${
          open
            ? " bg-background text-foreground "
            : "bg-primary text-background"
        }`}
      >
        <BookmarkIcon
          size={16}
          fill={`${open ? "hsl(229 31% 21%)" : " hsl(0 0% 96%) "}`}
        />
      </span>
      BOOKMARK
    </a>
  );
}
