import type { IWikiItem } from '@/services/wikia';

export const isVideo = (type: string): boolean => {
  return ['.mp4', '.m4v', '.mov'].includes(type.toLowerCase());
};

export const isImage = (type: string): boolean => {
  return ['.png','jpeg', '.jpg', '.webp'].includes(type.toLowerCase());
};

export const discoveryTag = (tag: string): string => {
  if (isImage(tag)) {
    return 'image';
  }

  if (isVideo(tag)) {
    return 'video';
  }
  return 'unknown';
};

export const getTags = (data: IWikiItem[]): string[] => {
  const tags = new Set<string>();

  data.forEach((item) => {
    tags.add(discoveryTag(item.type));
  });

  return [...tags];
};
