import client from '@/data/server/sanity/sanityClient';
import { groq } from 'next-sanity';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextResponse) {
  try {
    const res = await client.fetch(
      groq`
      *[_type == 'settings' && comp_name != null]{
    ...,
        'comp_logo' : comp_logo.asset->url,
        'pageheader': pageheader.asset->url,
      }
      `
    );

    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
  }
}
