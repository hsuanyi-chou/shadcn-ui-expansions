import { Metadata } from 'next';

const BASE_URL = 'https://shadcnui-expansions.typeart.cc';

interface BaseMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
}

export function baseMetadata({ title, description, keywords }: BaseMetadataProps): Metadata {
  const fullTitle = `${title} - shadcnui expansions`;
  const fullDescription = `shadcnui expansion: ${description}`;
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  const url = `${BASE_URL}/docs/${slug}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords,
    authors: [{ name: 'typeart.cc' }, { url: 'https://blog.typeart.cc/', name: 'Hsuan-Yi, Chou' }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: 'shadcn/ui expansions',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      creator: '@hsuanyi_chou',
    },
  };
}
