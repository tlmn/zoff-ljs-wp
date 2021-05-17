const { useBlockProps, InspectorControls } = window.wp.blockEditor;

const { __ } = window.wp.i18n;

const { PanelBody } = window.wp.components;

import FacebookIcon from "../../../assets/svg/contactItems/facebook";
import InstagramIcon from "../../../assets/svg/contactItems/instagram";
import MailIcon from "../../../assets/svg/contactItems/mail";
import TwitterIcon from "../../../assets/svg/contactItems/twitter";
import URLPicker from "../../../inspector/URLPicker";
import { getPrimaryColorValue } from "../../../lib/lib";

export default (props) => {
  const { setAttributes, attributes } = props;

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

  const blockProps = useBlockProps({
    className: "ljs-contact-bar-item",
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
            value={attributes.contactType}
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
          CONTACT_TYPES.filter(
            (item) => item.value === attributes.contactType
          )[0].component
        }
      </div>
    </>
  );
};
