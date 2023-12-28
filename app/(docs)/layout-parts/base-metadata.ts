import { Metadata } from 'next';

interface BaseMetadataProps {
  title?: string;
  description?: string;
}
export function baseMetadata({ title, description }: BaseMetadataProps): Metadata {
  return {
    title: `${title} - shadcnui expansions`,
    description: `shadcnui expansion: ${description}`,
  };
}
