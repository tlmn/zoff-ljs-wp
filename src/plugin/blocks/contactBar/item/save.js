const { useBlockProps } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

import FacebookIcon from "../../../assets/svg/contactItems/facebook";
import InstagramIcon from "../../../assets/svg/contactItems/instagram";
import MailIcon from "../../../assets/svg/contactItems/mail";
import TwitterIcon from "../../../assets/svg/contactItems/twitter";
import { getPrimaryColorValue } from "../../../lib/lib";

export default (props) => {
  const { attributes } = props;

  const CONTACT_TYPES = [
    {
      name: "E-Mail",
      value: "mail",
      component: (
        <MailIcon fillColor={getPrimaryColorValue(attributes.colorTheme)} />
      ),
    },
    {
      name: "Facebook",
      value: "facebook",
      component: (
        <FacebookIcon fillColor={getPrimaryColorValue(attributes.colorTheme)} />
      ),
    },
    {
      name: "Twitter",
      value: "twitter",
      component: (
        <TwitterIcon fillColor={getPrimaryColorValue(attributes.colorTheme)} />
      ),
    },
    {
      name: "Instagram",
      value: "instagram",
      component: (
        <InstagramIcon
          fillColor={getPrimaryColorValue(attributes.colorTheme)}
        />
      ),
    },
  ];

  const blockProps = useBlockProps.save({
    className: "ljs-contact-bar-item",
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
