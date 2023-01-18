import classNames from "classnames";
import React, { useState } from "react";
import styles from "./LazyLoadingImg.module.scss";
import noImage from "assets/img/noImage.jpg";
import { getOptimalPicture } from "utils";

type PropsType = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  imageLinks?: ImageLinksType;
  noDataImg?: string;
};

const LazyLoadingImg: React.FC<PropsType> = ({
  noDataImg,
  imageLinks,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const noData = noDataImg ?? noImage;

  if (error || (!imageLinks)) {
    return <img {...props} src={noData} className={props.className} alt="" />;
  } else {
    return (
      <>
        <img
          {...props}
          src={getOptimalPicture("min", imageLinks)}
          className={classNames(
            { [styles.displayNone]: loaded },
            props.className
          )}
          onError={() => setError(true)}
          alt=""
        />
        <img
          {...props}
          src={getOptimalPicture("max", imageLinks)}
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
