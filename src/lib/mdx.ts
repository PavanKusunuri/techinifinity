import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unstable_cache } from "next/cache";
import { readingTime } from "./utils";

const contentDir = path.join(process.cwd(), "content");

export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  author: string;
  category?: string;
  client?: string;
  industry?: string;
  slug: string;
  readingTime?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function getDir(type: "blog" | "case-studies") {
  return path.join(contentDir, type);
}

function _getAllPosts(type: "blog" | "case-studies"): PostMeta[] {
  const dir = getDir(type);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = matter(raw);
      return {
        ...(data as Omit<PostMeta, "slug">),
        slug,
        readingTime: readingTime(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function _getPostBySlug(
  type: "blog" | "case-studies",
  slug: string
): Post | null {
  const filePath = path.join(getDir(type), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    ...(data as Omit<PostMeta, "slug">),
    slug,
    content,
    readingTime: readingTime(content),
  };
}

export const getAllPosts = unstable_cache(
  async (type: "blog" | "case-studies") => _getAllPosts(type),
  ["getAllPosts"],
  { revalidate: 3600, tags: ["mdx"] }
);

export const getPostBySlug = unstable_cache(
  async (type: "blog" | "case-studies", slug: string) =>
    _getPostBySlug(type, slug),
  ["getPostBySlug"],
  { revalidate: 3600, tags: ["mdx"] }
);
