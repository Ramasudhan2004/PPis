import * as Lucide from "lucide-react";
import type { LucideIcon } from "lucide-react";

const registry: Record<string, LucideIcon> = {
  Cable: Lucide.Cable,
  Factory: Lucide.Factory,
  Network: Lucide.Network,
  PlugZap: Lucide.PlugZap,
  Gauge: Lucide.Gauge,
  Blocks: Lucide.Blocks,
  Building2: Lucide.Building2,
  HardHat: Lucide.HardHat,
  Server: Lucide.Server,
  Trees: Lucide.Trees,
  Train: Lucide.Train,
  Droplets: Lucide.Droplets,
  Hospital: Lucide.Hospital,
  Plane: Lucide.Plane,
  Warehouse: Lucide.Warehouse,
  GraduationCap: Lucide.GraduationCap,
  Car: Lucide.Car,
  ShieldCheck: Lucide.ShieldCheck,
  Layers: Lucide.Layers,
  BadgeCheck: Lucide.BadgeCheck,
  Clock: Lucide.Clock,
  Wrench: Lucide.Wrench,
  HeartHandshake: Lucide.HeartHandshake,
  TrendingUp: Lucide.TrendingUp,
  HeartPulse: Lucide.HeartPulse,
  Wallet: Lucide.Wallet,
  Users: Lucide.Users,
  Zap: Lucide.Zap,
  Linkedin: Lucide.Linkedin,
  Instagram: Lucide.Instagram,
  Twitter: Lucide.Twitter,
  Youtube: Lucide.Youtube,
};

interface IconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

/** Resolves icon names stored in content data to Lucide components. */
export function Icon({ name, className, strokeWidth = 1.9 }: IconProps) {
  const normalised = name.charAt(0).toUpperCase() + name.slice(1);
  const Component = registry[name] ?? registry[normalised] ?? Lucide.Circle;
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden />;
}
