import Link from "next/link";

interface DataType {
  icon: string;
  class_name: string;
}
[];

const social_icon: DataType[] = [
  {
    icon: "fab fa-facebook-f",
    class_name: "facebook",
  },
  {
    icon: "fab fa-twitter",
    class_name: "twitter",
  },
  {
    icon: "fab fa-instagram",
    class_name: "instagram",
  },
  {
    icon: "fab fa-youtube",
    class_name: "youtube",
  },
];

const SocialIcon = () => {
  return (
    <>
      {social_icon.map((icon, i) => (
        <li key={i}>
          <Link className={icon.class_name} href="#">
            <i className={icon.icon}></i>
          </Link>
        </li>
      ))}
    </>
  );
};

export default SocialIcon;
