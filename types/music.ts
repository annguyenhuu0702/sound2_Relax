import { typeAlbum } from "./album";
import { typeAuthor } from "./author";
import { typeSinger } from "./singer";

export interface typeMusic {
  id: number;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  updatedBy: number;
  name: string;
  description: string;
  category: 1 | 2 | 3;
  singerId: number;
  authorId: number;
  minutes: number;
  minutesDesc: string;
  song: string;
  images: string;
  type: number;
  status: 0 | 1;
  like: number;
  album_id: number;
  author: typeAuthor,
  singer: typeSinger,
  album : typeAlbum
}
