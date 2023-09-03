import { ApiWikia } from '@/api/wikia';

export interface IWikiItem {
  path: string;
  name: string;
  type: string;
  extracted_text: string | null;
  dimensions: string | null;
  sizeInBytes: number;
  metadata: { [key: string]: string } | null;
}

export class WikiaService {
  public static fetch(): Promise<IWikiItem[]> {
    return ApiWikia.get('/files').then((res) => res.data);
  }
}
