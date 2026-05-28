import {
  Globe, Mail, Users, Calendar, BarChart2, Target, RefreshCw, Star, Headphones,
  Thermometer, Home as HomeIcon, Zap, Droplets, Leaf, HardHat, Grid2X2, DoorOpen, Building2,
  DollarSign, Layers,
} from 'lucide-react'

export const SERVICE_ICONS: Record<string, React.ElementType> = {
  globe: Globe,
  mail: Mail,
  users: Users,
  calendar: Calendar,
  barChart: BarChart2,
  target: Target,
  refreshCw: RefreshCw,
  star: Star,
  headphones: Headphones,
}

export const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  thermometer: Thermometer,
  home: HomeIcon,
  zap: Zap,
  droplets: Droplets,
  leaf: Leaf,
  hardHat: HardHat,
  grid2x2: Grid2X2,
  doorOpen: DoorOpen,
  building2: Building2,
}

export const ABOUT_ICONS: Record<string, React.ElementType> = {
  target: Target,
  dollarSign: DollarSign,
  layers: Layers,
}
