import { cn } from "@/lib/utils";

type Props = { className?: string };
const AiIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={cn("size-7", className)}
    >
      <path d="M49.7,43.72l-12,37.44A1.4,1.4,0,0,0,39,83h3.36a1.39,1.39,0,0,0,1.33-1l2-6.05H61.77v-.33l2,6.38a1.41,1.41,0,0,0,1.34,1h3.36a1.39,1.39,0,0,0,1.33-1.82l-12-37.44a1.4,1.4,0,0,0-1.33-1H51A1.39,1.39,0,0,0,49.7,43.72ZM47.57,70l6.19-19.27L60,70Z" />
      <rect width="6" height="40.24" x="79" y="42.75" rx="1.4" />
      <path d="M68.27 42.67l-3.94-7.2a1.93 1.93 0 00-.8-.8l-7.2-3.94a1.4 1.4 0 010-2.46l7.2-3.94a1.93 1.93 0 00.8-.8l3.94-7.2a1.4 1.4 0 012.46 0l3.94 7.2a1.93 1.93 0 00.8.8l7.2 3.94a1.4 1.4 0 010 2.46l-7.2 3.94a1.93 1.93 0 00-.8.8l-3.94 7.2A1.4 1.4 0 0168.27 42.67zM52.27 109.67l-3.78-6.92a.69.69 0 00-.24-.24l-6.92-3.78a1.4 1.4 0 010-2.46l6.92-3.78a.69.69 0 00.24-.24h0l3.78-6.92a1.4 1.4 0 012.46 0l3.78 6.92a.69.69 0 00.24.24l6.92 3.78a1.4 1.4 0 010 2.46l-6.92 3.78a.69.69 0 00-.24.24l-3.78 6.92A1.4 1.4 0 0152.27 109.67z" />
      <circle cx="28" cy="46" r="6" />
      <circle cx="92" cy="92" r="6" />
      <circle cx="103.5" cy="70.5" r="4.5" />
    </svg>
  );
};
export default AiIcon;
