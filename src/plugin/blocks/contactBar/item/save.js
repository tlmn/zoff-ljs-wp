const { useBlockProps } = wp.blockEditor;

import FacebookIcon from "../../../assets/svg/contactItems/facebook";
import InstagramIcon from "../../../assets/svg/contactItems/instagram";
import MailIcon from "../../../assets/svg/contactItems/mail";
import TwitterIcon from "../../../assets/svg/contactItems/twitter";
import { getPrimaryColorName } from "../../../lib/lib";

export default ({ attributes: { colorTheme, contactType, url } }) => {
  const CONTACT_TYPES = [
    {
      name: "E-Mail",
      value: "mail",
      component: <MailIcon />,
    },
    {
      name: "Facebook",
      value: "facebook",
      component: <FacebookIcon />,
    },
    {
      name: "Twitter",
      value: "twitter",
      component: <TwitterIcon />,
    },
    {
      name: "Instagram",
      value: "instagram",
      component: <InstagramIcon />,
    },
  ];

  const blockProps = useBlockProps.save({
    className: `fill-${getPrimaryColorName(colorTheme)}`,
  });

  return (
    <a href={url} {...blockProps}>
      {CONTACT_TYPES.filter((item) => item.value === contactType)[0]?.component}
    </a>
  );
};
