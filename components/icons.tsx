interface IconProps {
  size?: number;
  className?: string;
}

const svgProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
} as const;

export function WhatsAppIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <path d="M17.6 6.3A8.3 8.3 0 0 0 4.8 17.4L3 21l3.7-1.7A8.3 8.3 0 0 0 21 12a8.2 8.2 0 0 0-3.4-5.7z" />
      <path d="M15.6 13.9c-.3.8-1.6 1.5-2.2 1.6-.6 0-1-.2-1.8-.5a12.6 12.6 0 0 1-3.6-3.2c-.5-.7-1.1-1.9-.5-2.8.2-.3.5-.5.7-.5h.5c.2 0 .4 0 .5.4l.8 1.9c.1.2 0 .4-.1.5l-.4.5c-.1.2-.3.2-.1.5.5.8 1.1 1.4 1.8 1.9.3.2.5.1.7-.1l.6-.8c.2-.3.3-.2.5-.1l1.6.8c.2.1.4.2.5.4 0 .2 0 .7-.3 1.3z" />
    </svg>
  );
}

export function CameraIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export function MapPinIcon({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function StarIcon({ size = 12, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps} fill="currentColor">
      <path d="M11.5 2.3a.53.53 0 0 1 .95 0l2.31 4.68a2.12 2.12 0 0 0 1.6 1.16l5.16.76a.53.53 0 0 1 .3.9l-3.74 3.64a2.12 2.12 0 0 0-.61 1.88l.88 5.14a.53.53 0 0 1-.77.56l-4.62-2.43a2.12 2.12 0 0 0-1.97 0L6.4 21.01a.53.53 0 0 1-.77-.56l.88-5.14a2.12 2.12 0 0 0-.61-1.88L2.16 9.8a.53.53 0 0 1 .3-.9l5.16-.76a2.12 2.12 0 0 0 1.6-1.16z" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps} strokeWidth={1.5}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function RingsIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <circle cx="9" cy="15" r="6" />
      <circle cx="15" cy="15" r="6" />
      <path d="M15 9l-1.6-2.2L15 4.5l1.6 2.3z" />
    </svg>
  );
}

export function CrownIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <path d="M11.56 3.27a.5.5 0 0 1 .88 0l2.95 5.6a1 1 0 0 0 1.52.29l4.27-3.66a.5.5 0 0 1 .8.52l-2.83 10.24a1 1 0 0 1-.96.74H5.81a1 1 0 0 1-.96-.74L2.02 6.02a.5.5 0 0 1 .8-.52l4.27 3.66a1 1 0 0 0 1.52-.29z" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function CheckIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps} strokeWidth={2}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function ImageIcon({ size = 32, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21" />
    </svg>
  );
}

export function ChevronLeftIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps} strokeWidth={1.5}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps} strokeWidth={1.5}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function CloseIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps} strokeWidth={1.5}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function MessageCircleIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
    </svg>
  );
}

export function CalendarCheckIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

export function GiftIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}

export function HeartIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export function SparkleIcon({ size = 12, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps} fill="currentColor" stroke="none">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function PhoneIcon({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MailIcon({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function ChevronUpIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps} strokeWidth={1.5}>
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
