import MarkdownIt from 'markdown-it';
import { Header } from 'vitepress/types/shared';

export interface MarkdownParsedData {
  hoistedTags?: string[];
  links?: string[];
  headers?: Header[];
}

export function addHoistedTag(md: MarkdownIt, source: string) {
  const data = (md as any).__data as MarkdownParsedData;
  const hoistedTags = data.hoistedTags || (data.hoistedTags = []);
  const setupTagIndex = hoistedTags.findIndex((tag) => tag.startsWith('<script setup>'));
  if (setupTagIndex !== -1) {
    hoistedTags[setupTagIndex] = hoistedTags[setupTagIndex].replace('</script>', `\n${source}\n</script>`);
  } else {
    hoistedTags.push(`<script setup>${source}</script>`);
  }
}
