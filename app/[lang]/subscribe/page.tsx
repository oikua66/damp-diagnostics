import { redirect } from 'next/navigation';
import { languages, type Lang } from '../../../lib/translations';

type Props = { params: Promise<{ lang: string }> };

export default async function SubscribeRedirect({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = languages.includes(rawLang as Lang) ? rawLang : 'en';
  redirect(`/${lang}#subscribe`);
}
