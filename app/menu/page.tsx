import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MenuExperience } from '@/components/menu-experience';

export default function MenuPage() {
  return <main className="min-h-screen bg-[#120e0d] text-[#fff7e8]"><SiteHeader /><MenuExperience /><SiteFooter /></main>;
}
