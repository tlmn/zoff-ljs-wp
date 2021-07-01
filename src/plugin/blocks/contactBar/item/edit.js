const { useBlockProps, InspectorControls } = wp.blockEditor;

const { __ } = wp.i18n;

const { PanelBody } = wp.components;

import FacebookIcon from "../../../assets/svg/contactItems/facebook";
import InstagramIcon from "../../../assets/svg/contactItems/instagram";
import MailIcon from "../../../assets/svg/contactItems/mail";
import TelegramIcon from "../../../assets/svg/contactItems/telegram";
import TikTokIcon from "../../../assets/svg/contactItems/tiktok";
import TwitterIcon from "../../../assets/svg/contactItems/twitter";
import URLPicker from "../../../inspector/URLPicker";
import WebsiteIcon from "../../../assets/svg/contactItems/website";
import { getPrimaryColorName } from "../../../lib/lib";

export default (props) => {
  const {
    attributes: { contactType, colorTheme },
    setAttributes,
  } = props;
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
    {
      name: "Website",
      value: "website",
      component: <WebsiteIcon />,
    },
    {
      name: "Telegram",
      value: "telegram",
      component: <TelegramIcon />,
    },
    {
      name: "TikTok",
      value: "tiktok",
      component: <TikTokIcon />,
    },
  ];

  const blockProps = useBlockProps({
    className: `fill-${getPrimaryColorName(colorTheme)}`,
  });

  return (
    <>
      <InspectorControls>
        <URLPicker {...props} />
        <PanelBody title={__("Kontaktart")} initialOpen={true}>
          <select
            onChange={(event) =>
              setAttributes({ contactType: event.target.value })
            }
            value={contactType}
          >
            {CONTACT_TYPES.map((item, index) => (
              <option value={item.value} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {
          CONTACT_TYPES.filter((item) => item.value === contactType)[0]
            .component
        }
      </div>
    </>
  );
};
