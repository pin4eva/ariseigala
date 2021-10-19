import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

interface IFlip {
  children: React.ReactChild[];
  width: number;
  height: number;
  render_state: boolean;
}

export const Flipbook = ({
  children,
  width,
  height,
  render_state,
}: IFlip): JSX.Element => {
  const bookFlip = useRef<any>(null);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setTotalPage(bookFlip.current?.pageFlip()?.getPageCount());
  }, [render_state]);

  const nextBtnClick = () => {
    bookFlip.current?.pageFlip().flipNext();
  };
  const prevBtnClick = () => {
    bookFlip.current?.pageFlip().flipPrev();
  };
  const onPage = (e: { data: React.SetStateAction<number> }) => {
    setPage(e.data);
  };

  return (
    <div className="">
      <HTMLFlipBook
        width={width}
        height={height}
        maxWidth={width}
        className="pdf-flipper d-block mx-auto overflow-auto"
        autoSize={true}
        mobileScrollSupport={true}
        usePortrait={true}
        showPageCorners={false}
        startPage={0}
        size={"stretch"}
        onFlip={onPage}
        minWidth={width}
        minHeight={height}
        maxHeight={0}
        drawShadow={true}
        flippingTime={1000}
        startZIndex={0}
        maxShadowOpacity={0.5}
        showCover={false}
        clickEventForward={false}
        useMouseEvents={true}
        swipeDistance={0}
        disableFlipByClick={false}
        style={{}}
        ref={bookFlip}
      >
        {children}
      </HTMLFlipBook>
      <div className="mt-3 container">
        <div className="progress mb-3">
          <div
            className="progress-bar"
            style={{
              width: `${Math.ceil(((page + 1) / totalPage) * 100)}%`,
            }}
          ></div>
        </div>
        <p className="text-end text-white ">
          {Math.ceil(((page + 1) / totalPage) * 100)}% read
        </p>
        <div className="btn-holder  d-flex justify-content-center">
          <button
            className="btn btn-light"
            onClick={(e) => {
              render_state ? prevBtnClick() : e.preventDefault();
            }}
          >
            <i className="fas fa-2x fa-caret-left"></i>
          </button>
          <span className="btn fs-4 btn-dark">
            {render_state ? `${page + 1} of ${totalPage}` : "--"}
          </span>
          <button
            className="btn btn-light"
            onClick={(e) => {
              render_state ? nextBtnClick() : e.preventDefault();
            }}
          >
            <i className="fas fa-2x fa-caret-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
