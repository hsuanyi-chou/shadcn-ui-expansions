'use client';
import React from 'react';
import InfiniteScroll from '@/components/ui/infinite-scroll';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
interface Beers {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}

const Beer = ({ beer }: { beer: Beers }) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-lg border-2 border-gray-200 p-2">
      <div className="flex gap-2">
        <div className="p-2">
          <Image src={beer.image_url} alt={beer.name} width={32} height={16} />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <div className="font-bold text-primary">{beer.name}</div>
          <div className="text-sm text-muted-foreground">{beer.tagline}</div>
        </div>
      </div>
    </div>
  );
};

const InfiniteScrollDemo = () => {
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);
  const [beers, setBeers] = React.useState<Beers[]>([]);

  const next = async () => {
    setLoading(true);

    /**
     * Intentionally delay the search by 800ms before execution so that you can see the loading spinner.
     * In your app, you can remove this setTimeout.
     **/
    setTimeout(async () => {
      const res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=3`);
      const data = (await res.json()) as Beers[];
      setBeers((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);

      // Usually your response will tell you if there is no more data.
      if (data.length === 0) {
        setHasMore(false);
      }
      setLoading(false);
    }, 800);
  };
  return (
    <div className="max-h-[300px] w-full  overflow-y-auto px-10">
      <div className="flex w-full flex-col items-center  gap-3">
        {beers.map((beer) => (
          <Beer key={beer.id} beer={beer} />
        ))}
        <InfiniteScroll hasMore={hasMore} isLoading={loading} next={next} threshold={1}>
          <Loader2 className="my-4 h-8 w-8 animate-spin" />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default InfiniteScrollDemo;
