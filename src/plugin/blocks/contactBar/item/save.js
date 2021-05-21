const { useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

import FacebookIcon from "../../../assets/svg/contactItems/facebook";
import InstagramIcon from "../../../assets/svg/contactItems/instagram";
import MailIcon from "../../../assets/svg/contactItems/mail";
import TwitterIcon from "../../../assets/svg/contactItems/twitter";
import { getPrimaryColorName } from "../../../lib/lib";

export default (props) => {
  const { attributes } = props;

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
    className: `ljs-contact-bar-item fill-${getPrimaryColorName(
      attributes.colorTheme
    )}`,
  });

  return (
    <a href={attributes.url} {...blockProps}>
      {
        CONTACT_TYPES.filter((item) => item.value === attributes.contactType)[0]
          .component
      }
    </a>
  );
};
