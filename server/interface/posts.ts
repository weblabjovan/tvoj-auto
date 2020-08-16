const postStructureTemplate = [
  {type: "simple-paragraph", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
  {type: "simple-clipping", text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."},
  
  {type: "complex-paragraph", id:"id_section_1", headline: "Neki podnaslov ovde", text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."},
  {type: "simple-video", src: "https://www.youtube.com/embed/qqyDFTQnDqA"},
  {type: "simple-headline", id:"id_section_2", headline: "Neki podnaslov ovde"},
  {type: "simple-paragraph", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
  {type: "highlight-paragraph", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
  {type: "numbered-list", headline:"Naslov numerisne liste", list: [{text: "Numerisani podnaslov u listi 1"}, {text: "Numerisani podnaslov u listi 2"}, {text: "Numerisani podnaslov u listi 3"}, {text: "Neki podnaslov 4"}, {text: "Numerisani podnaslov u listi 4"}, {text: "Neki podnaslov 4"}]},
  {type: "simple-headline", id:"id_section_3", headline: "Neki podnaslov ovde"},
  {type: "simple-subheadline", headline: "Mali podnaslov koji nešto znači"},
  {type: "simple-paragraph", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"},
  {type: "simple-subheadline", headline: "Mali podnaslov koji nešto znači"},
  {type: "simple-paragraph", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
  {type: "simple-list", headline:"Naslov proste liste", list: [{text: "Prosti podnaslov u listi 1"}, {text: "Prosti podnaslov u listi 2"}, {text: "Prosti podnaslov u listi 3"}, {text: "Prosti podnaslov 4"}, {text: "Prosti podnaslov u listi 4"}, {text: "Prosti podnaslov 4"}]},
  {type: "simple-headline", id:"id_section_4", headline: "Neki podnaslov ovde"},
  {type: "photo-element", src: "/small-side.jpg", alt: "golf-5-klima", title: "Golf 5 klima", explanation: "Ovo je objašnjenje za sliku naravno"},
  {type: "simple-paragraph", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
  {type: "simple-table", table: { head: ["Model", "Godište", "Cena"], content:[["Golf 5", "2004", "3000€"], ["Golf 5", "2005", "3500€"], ["Golf 5", "2006", "3700€"], ["Golf 5", "2007", "3900€"]]}},
  {type: "link-paragraph", linkText: {textFront: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.", textBack: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.", link:"Neki link", href: "https://reactstrap.github.io/components/tables/"} },
]

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