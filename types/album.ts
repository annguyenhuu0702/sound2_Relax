import { typeAuthor } from "./author";
import { typeSinger } from "./singer";

export interface typeAlbum {
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
  images: string;
  status: 0 | 1;
  like: number;
  // author: typeAuthor,
  // singer : typeSinger

}

