import classNames from "classnames";
import React, { useState } from "react";
import styles from "./LazyLoadingImg.module.scss";
import noImage from "assets/img/noImage.jpg";

type PropsType = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  smallThumbnail?: string;
  thumbnail?: string;
  noDataImg?: string;
};

const LazyLoadingImg: React.FC<PropsType> = ({
  noDataImg,
  thumbnail,
  smallThumbnail,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const noData = noDataImg ?? noImage;

  console.log(noData);

  // console.log('thumb(src, props.width)', thumb(src, props.width))
  if (error || (!thumbnail && !smallThumbnail)) {
    return <img {...props} src={noData} className={props.className} alt="" />;
  } else {
    return (
      <>
        <img
          {...props}
          src={smallThumbnail}
          className={classNames(
            { [styles.displayNone]: loaded },
            props.className
          )}
          onError={() => setError(true)}
          alt=""
        />
        <img
          {...props}
          src={thumbnail}
          className={classNames(
            { [styles.displayNone]: !loaded },
            props.className
          )}
          onLoad={() => setLoaded(true)}
          alt=""
        />
      </>
    );
  }
};

export default LazyLoadingImg;
