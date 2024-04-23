import gardner from "./imgs/gardener.jpeg";
import babysitter from "./imgs/babysitter.jpg";
import allrounder from "./imgs/allRounder.jpeg";
import { FaShield, FaTrophy } from "react-icons/fa6";
import { TbReplaceFilled } from "react-icons/tb";

export const navaritems = [
  {
    id: 1,
    item: "Services",
    url: "#services",
  },
  {
    id: 2,
    item: "About",
    url: "#about",
  },
  {
    id: 3,
    item: <div className="btn">Signin</div>,
    url: "/Signin",
  },
];

export const serviceCardData = [
  {
    id: 1,
    title: "Gardener",
    img: gardner,
  },
  {
    id: 2,
    title: "All Rounder",
    img: allrounder,
  },
  {
    id: 3,
    title: "Babysitter",
    img: babysitter,
  },
];
export const aboutCardData = [
  {
    id: 1,
    title: "Safety",
    text: "We check proper details of every maid because your safety is our first priority",
    icon: <FaShield />,
  },
  {
    id: 2,
    title: "High Quality",
    text: "Only skilled maids are registered with us. As maids are personally trained by our team",
    icon: <FaTrophy />,
  },
  {
    id: 3,
    title: "Replacement for Free",
    text: "If the maid leaves for any reason within 6 months of joining, we will replace the maid",
    icon: <TbReplaceFilled />,
  },
];

export const footerData = {
//   appStoreLink: "https://www.apple.com/app-store/",
//   googlePlayLink: "https://play.google.com/store/apps",
  services: [
    {
      title: "Our Services",
      categories: [
        { title: "House Maid" },
        { title: "Cooking Maid" },
        { title: "Baby Sitter" },
        { title: "Gardner" },
        { title: "All Rounder" },
        { title: "Driver" },
        { title: "Office Maid" },
      ],
    },
  ],
  aboutUs: [
    { title: "About Us" },
    { title: "Our Mission" },
    { title: "Our Team" },
    { title: "Our Blog" },
  ],
  contactUs: [
    { title: "Contact Us" },
    { title: "Register as HomeGroom" },
    { title: "Terms & Conditions" },
    { title: "Privacy Policy" },
  ],
};
