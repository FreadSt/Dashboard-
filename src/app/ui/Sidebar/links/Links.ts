import { LayoutDashboard, Users, Handshake, FolderKanban } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const ROUTES = {
  dashboard: '/',
  projects: '/projects',
  leads: '/leads',
  deals: '/deals'
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]

type NavItem = {
  label: string
  icon: LucideIcon
  to: RoutePath 
}

export const NAV_LINKS = [
  { label: 'Dashboard', to: ROUTES.dashboard, icon: LayoutDashboard },
  { label: 'Leads', to: ROUTES.leads, icon: Handshake },
  { label: 'Deals', to: ROUTES.deals, icon: Users },
  { label: 'Projects', to: ROUTES.projects, icon: FolderKanban },
] satisfies readonly NavItem[]