export type NavLink = {
  label: string;
  href: string;
};

export type ResearchPost = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  category: string;
  categoryBarClass: string;
  dateText: string;
  dateISO: string;
};

export type DataSolution = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

export type PartnerLogo = {
  name: string;
  url: string;
  width: number;
  height: number;
};

export type FooterColumn = {
  heading: string;
  links: NavLink[];
  external?: boolean;
};
