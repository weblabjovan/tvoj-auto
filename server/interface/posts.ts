interface PostsStructureLinkProps{
  textFront: string,
  textBack: string,
  link: string,
  href: string,
}

interface PostsStructureListProps{
  text: string,
  href?: string,
}

interface PostsStructureTableProps{
  head: Array<string>,
  columns?: number,
  rows?: number,
  content: Array<Array<string>>
}

interface PostsStructureProps{
  type: string,
  text?: string,
  id?: string,
  src?: string,
  alt?: string,
  title?: string,
  explanation?: string,
  list?: Array<PostsStructureListProps>,
  headline?: string,
  table?: PostsStructureTableProps,
  linkText?: PostsStructureLinkProps,
}

interface PostsAuthorProps{
  firstName: string,
  lastName: string,
  photoPath: string,
  description: string
}

interface PostsModelProps{
  maker: string,
  name: string,
  fullName: string,
  country: string,
  yearFrom: number,
  yearTo: number
}

interface PostsPhotosProps{
  mediumPath: string,
  smallPath: string,
}

interface PostProps {
  id: number,
  name: string,
  urlName: string,
  dateString: string,
  date: Date,
  mainPhotos: PostsPhotosProps,
  model: PostsModelProps,
  author: PostsAuthorProps,
  related: Array<string>,
  popular: boolean,
  description: string,
  structure: Array<PostsStructureProps>,
}

interface PostMap {
  [post: string]: PostProps
}

export default PostMap;