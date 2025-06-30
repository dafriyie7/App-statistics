
import facebook from "../assets/images/apps/17.png";
import twitter from "../assets/images/apps/twitter-circle.png";
import instagram from "../assets/images/apps/19.png";
import snapchat from "../assets/images/apps/20.png";
import tiktok from "../assets/images/apps/03.png";

// This simulates what you might receive from an API.
export default [
    {
      icon: facebook,   // keep as public URL
      name: "Facebook",
      category: "Social Media",
      value: 142,
      trend: 12.3,
    },
    {
      icon: twitter,
      name: "Twitter",
      category: "News & Social",
      value: 98,
      trend: -4.1,
    },
    {
      icon: instagram,
      name: "TikTok",
      category: "Media",
      value: 173,
      trend: 7.9,
    },
    {
      icon: snapchat,
      name: "Instagram",
      category: "Photo Sharing",
      value: 121,
      trend: -2.5,
    },
    {
      icon: tiktok,
      name: "Snapchat",
      category: "Messaging",
      value: 120,
      trend: 5.6,
    },
  ];