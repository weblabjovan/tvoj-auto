import PostMap from '../interface/posts';

const posts: PostMap = {
  golf_5_kako_upaliti_klimu: {
    id: 1,
    name: "GOLF 5: KAKO UPALITI KLIMU?",
    urlName: "golf_5_kako_upaliti_klimu",
    dateString: "28 Jul 2020",
    date: new Date('2020/07/28'),
    mainPhotos: { mediumPath: "/small-side.jpg", smallPath: "/small-side.jpg"},
    model: { maker: "Volkswagen", name: "Golf 5", fullName: "Golf mk5", country: "Nemačka", yearFrom: 2003, yearTo: 2008 },
    author: { firstName: "Jovan", lastName: "Šutić", photoPath: "/jovan-img.jpg", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    related: [],
    popular: true,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    structure: [
      {type: "photo-element", src: "/small-side.jpg", alt: "golf-5-klima", title: "Golf 5 klima"},
      {type: "simple-paragraph", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'."},
      {type: "simple-clipping", text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},
      {type: "content-table", list: [{text: "Neki podnaslov 1", href: "#id_section_1"}, {text: "Neki podnaslov 2", href: "#id_section_2"}, {text: "Neki podnaslov 3", href: "#id_section_3"}, {text: "Neki podnaslov 4", href: "#id_section_4"}]},
      {type: "complex-paragraph", id:"id_section_1", headline: "Neki podnaslov ovde", text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},
      {type: "simple-video", src: "https://www.youtube.com/embed/qqyDFTQnDqA"},
      {type: "simple-headline", id:"id_section_2", headline: "Neki podnaslov ovde"},
      {type: "simple-paragraph", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'."},
      {type: "highlight-paragraph", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'."},
      {type: "numbered-list", headline:"Naslov numerisne liste", list: [{text: "Numerisani podnaslov u listi 1"}, {text: "Numerisani podnaslov u listi 2"}, {text: "Numerisani podnaslov u listi 3"}, {text: "Neki podnaslov 4"}, {text: "Numerisani podnaslov u listi 4"}, {text: "Neki podnaslov 4"}]},
      {type: "simple-headline", id:"id_section_3", headline: "Neki podnaslov ovde"},
      {type: "simple-subheadline", headline: "Mali podnaslov koji nešto znači"},
      {type: "simple-paragraph", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'."},
      {type: "simple-subheadline", headline: "Mali podnaslov koji nešto znači"},
      {type: "simple-paragraph", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'."},
      {type: "simple-list", headline:"Naslov proste liste", list: [{text: "Prosti podnaslov u listi 1"}, {text: "Prosti podnaslov u listi 2"}, {text: "Prosti podnaslov u listi 3"}, {text: "Prosti podnaslov 4"}, {text: "Prosti podnaslov u listi 4"}, {text: "Prosti podnaslov 4"}]},
      {type: "simple-headline", id:"id_section_4", headline: "Neki podnaslov ovde"},
      {type: "photo-element", src: "/small-side.jpg", alt: "golf-5-klima", title: "Golf 5 klima", explanation: "Ovo je objašnjenje za sliku naravno"},
      {type: "simple-paragraph", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'."},
      {type: "simple-table", table: { head: ["Model", "Godište", "Cena"], content:[["Golf 5", "2004", "3000€"], ["Golf 5", "2005", "3500€"], ["Golf 5", "2006", "3700€"], ["Golf 5", "2007", "3900€"]]}},
      {type: "link-paragraph", linkText: {textFront: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.", textBack: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.", link:"Neki link", href: "https://reactstrap.github.io/components/tables/"} },
    ]
  }
}

export default posts;