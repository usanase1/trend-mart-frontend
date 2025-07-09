export interface BlogCardProps {
  image: string;
  author: string;
  date: string;
  views: number;
  title: string;
  description: string;
  onReadMore?: () => void;
} 