export default interface BannerResponse {
  id: string;
  image: string;
  title: string;
  linkType: LinkType;
  link: string;
}

type LinkType = "EXTERNAL" | "NOTIFICATION" | "SAVING" | "TRANSACTION" | "EQUB";
