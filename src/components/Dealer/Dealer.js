import s from "./Dealer.module.css";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const Dealer = ({ dealer }) => {
  const { name, address, tel, url } = dealer;
  const [ref, inView] = useInView({
    delay: 300,
  });

  return (
    <div
      ref={ref}
      className={clsx(s.root, {
        [s.rootInView]: inView,
      })}
    >
      <h4 className={clsx(s.title)}>{name}</h4>
      <ul className={clsx(s.info)}>
        <li>
          <span className={clsx(s.label)}>ADD</span>
          {address}
        </li>
        <li>
          <span className={clsx(s.label)}>TEL</span>
          {tel}
        </li>
        {url && (
          <li>
            <span className={clsx(s.label)}>URL</span>
            <a href={url} rel="noreferrer noopener" target="_blank">
              {url}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Dealer;
