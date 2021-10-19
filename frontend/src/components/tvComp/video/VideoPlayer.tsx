import React from "react";
import ReactPlayer from "react-player/youtube";
const VideoPlayer = ({
   id,
}: {
   id: string | string[] | undefined;
}): JSX.Element => {
   const defaultId = `https://www.youtube-nocookie.com/watch?v=${
      !id ? `ysz5S6PUM-U` : id
   }`;

   return (
      <div>
         <div>
            {process.browser && (
               <ReactPlayer
                  url={defaultId}
                  controls={true}
                  width={`100%`}
                  onBuffer={() => console.log("buffing")}
                  fallback={
                     <div className="d-flex justify-content-center align-items-center">
                        <i className="fas fa-spinner animate__animated animate__infinite animate__rotateIn fa-2x text-white"></i>
                     </div>
                  }
               />
            )}
         </div>
      </div>
   );
};

export default VideoPlayer;
