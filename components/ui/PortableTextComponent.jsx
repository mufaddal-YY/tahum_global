import { FiCheckCircle } from "react-icons/fi";
import PortableText from "react-portable-text";

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img src={value.imageUrl} alt={value.alt || "Image"} />
    ),
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url} className="callToActionInline">
          {value.text}
        </a>
      ) : (
        <div className="callToActionBlock">{value.text}</div>
      ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong>{children}</strong>,
  },
};

const PortableTextComponent = ({ content }) => {
  return (
    <div className="">
      <PortableText
        content={content}
        components={myPortableTextComponents}
        serializers={{
          h1: (props) => <h1 style={{ color: "red" }} {...props} />,

          h2: (props) => <h2 style={{ fontSize: "32px" }} {...props} />,
          h3: (props) => <h3 style={{ fontSize: "28px" }} {...props} />,
          h4: (props) => <h4 style={{ fontSize: "24px" }} {...props} />,
          h5: (props) => <h5 style={{ fontSize: "24px" }} {...props} />,
          li: ({ children }) => (
            <li className="special-list-item text-md flex lg:text-md list-none leading-snug py-2">
              <span>
                <FiCheckCircle className="mr-2 mt-1 text-md text-green-600" />{" "}
              </span>
              <span>{children}</span>
            </li>
          ),
          normal: ({ children }) => {
            if (children.length === 1 && children[0] === "") {
              return <br />;
            }
            return <p>{children}</p>;
          },
        }}
      />
    </div>
  );
};

export default PortableTextComponent;
