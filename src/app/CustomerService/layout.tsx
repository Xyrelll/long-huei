import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/config/metadata';

export const metadata: Metadata = genMeta({
  title: '專人客服 - 龍匯天下',
  description: '龍匯天下專人客服-澳門旅遊-訂房-包車-桑拿-專人客服。加入LINE或WeChat好友享優惠，提供24小時專業客服服務。',
  path: '/CustomerService',
  image: '/Images/Logo.png',
});

export default function CustomerServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

