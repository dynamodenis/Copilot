import React from 'react';
import {
  Target,
  Boxes,
  Infinity,
  Play,
  Pause,
  ListChecks,
  Workflow,
  Timer,
  Repeat,
  RefreshCw,
  RotateCw,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  Check,
  X,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ExternalLink,
  User,
  Users,
  UserPlus,
  UserCheck,
  Mail,
  Phone,
  Calendar,
  Clock,
  Star,
  Heart,
  Bookmark,
  Share2,
  Copy,
  Edit,
  Trash2,
  Search,
  Filter,
  Settings,
  HelpCircle,
  Info,
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  XCircle,
  LineChart,
  BarChart,
  PieChart,
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  Globe,
  Link,
  Paperclip,
  FileText,
  File,
  Folder,
  FolderOpen,
  Download,
  Upload,
  Send,
  MessageCircle,
  MessageSquare,
  Bell,
  BellOff,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  Shield,
  ShieldCheck,
  Home,
  Building,
  Briefcase,
  Award,
  Gift,
  Coffee,
  Lightbulb,
  Rocket,
  Flag,
  MapPin,
  Navigation,
  Compass,
  Car,
  Crown,
  type LucideIcon,
} from 'lucide-react';
import type { IconProps } from '../types';
import styles from '../GenUI.module.scss';

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  // Arrows & Navigation
  target: Target,
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  'chevron-down': ChevronDown,
  'chevron-right': ChevronRight,
  'chevron-left': ChevronLeft,
  'chevron-up': ChevronUp,
  repeat: Repeat,
  'refresh-cw': RefreshCw,
  'rotate-cw': RotateCw,
  navigation: Navigation,
  compass: Compass,
  
  // Multimedia
  play: Play,
  pause: Pause,
  
  // Text & Lists
  'list-checks': ListChecks,
  
  // Development
  workflow: Workflow,
  
  // Time
  timer: Timer,
  clock: Clock,
  calendar: Calendar,
  
  // Shopping & Business
  boxes: Boxes,
  briefcase: Briefcase,
  building: Building,
  
  // Math & Charts
  infinity: Infinity,
  plus: Plus,
  minus: Minus,
  'line-chart': LineChart,
  'bar-chart': BarChart,
  'pie-chart': PieChart,
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  activity: Activity,
  
  // Actions
  check: Check,
  x: X,
  edit: Edit,
  trash: Trash2,
  copy: Copy,
  share: Share2,
  'external-link': ExternalLink,
  search: Search,
  filter: Filter,
  settings: Settings,
  download: Download,
  upload: Upload,
  send: Send,
  zap: Zap,
  
  // Users
  user: User,
  users: Users,
  'user-plus': UserPlus,
  'user-check': UserCheck,
  
  // Communication
  mail: Mail,
  phone: Phone,
  'message-circle': MessageCircle,
  'message-square': MessageSquare,
  bell: Bell,
  'bell-off': BellOff,
  
  // Status & Favorites
  star: Star,
  heart: Heart,
  bookmark: Bookmark,
  flag: Flag,
  award: Award,
  gift: Gift,
  crown: Crown,
  
  // Info & Alerts
  'help-circle': HelpCircle,
  info: Info,
  'alert-circle': AlertCircle,
  'alert-triangle': AlertTriangle,
  'check-circle': CheckCircle,
  'x-circle': XCircle,
  
  // View
  eye: Eye,
  'eye-off': EyeOff,
  
  // Security
  lock: Lock,
  unlock: Unlock,
  key: Key,
  shield: Shield,
  'shield-check': ShieldCheck,
  
  // Links & Files
  link: Link,
  paperclip: Paperclip,
  'file-text': FileText,
  file: File,
  folder: Folder,
  'folder-open': FolderOpen,
  
  // Location
  home: Home,
  'map-pin': MapPin,
  globe: Globe,
  
  // Transportation
  car: Car,
  
  // Ideas & Energy
  lightbulb: Lightbulb,
  rocket: Rocket,
  coffee: Coffee,
};

export const Icon: React.FC<IconProps> = ({ name, size = 18 }) => {
  const IconComponent = iconMap[name.toLowerCase()];
  
  if (!IconComponent) {
    // Fallback to a default icon or return null
    console.warn(`Icon "${name}" not found in registry`);
    return <span className={styles.icon} style={{ width: size, height: size }}>•</span>;
  }
  
  return (
    <span className={styles.icon}>
      <IconComponent size={size} />
    </span>
  );
};

