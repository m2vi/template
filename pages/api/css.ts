import { fetchCSS } from '@m2vi/iva';
import cache from 'memory-cache';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (cache.get('css')) return res.status(200).send(cache.get('css'));

  const css = await fetchCSS([
    'https://dev.core.fluxi.ml/styles/colors.css',
    'https://dev.core.fluxi.ml/styles/globals.css',
    'https://dev.core.fluxi.ml/styles/components.css',
  ]);

  cache.put('css', css);

  res.status(200).json(cache.get('css'));
}
