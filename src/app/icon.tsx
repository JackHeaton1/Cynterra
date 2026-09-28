import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon generated from the concentric arc mark. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0d0e",
          borderRadius: 12,
        }}
      >
        <svg width="44" height="44" viewBox="0 0 152 150" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#abd037"
            fillRule="evenodd"
            d="M76.25,0a74.88,74.88,0,0,1,72.84,57.54h-2.78A72.22,72.22,0,0,0,67.16,3.27h.27a71.62,71.62,0,0,1,69.48,54.27h-2.79A68.89,68.89,0,0,0,23.18,22.07,74.61,74.61,0,0,1,76.25,0Zm72.84,92.14A74.86,74.86,0,0,1,23.18,127.63a68.9,68.9,0,0,0,111-35.49h2.78a71.61,71.61,0,0,1-69.48,54.3h-.27a72.21,72.21,0,0,0,79.15-54.29Z"
          />
          <path
            fill="#ffffff"
            fillRule="evenodd"
            d="M67.21,8.11A66.77,66.77,0,0,0,2.74,57.54h2.8A64.06,64.06,0,0,1,67.21,10.81c1.1,0,2.19,0,3.28.08A64.17,64.17,0,0,0,13.32,57.54h2.81a61.43,61.43,0,0,1,98.41-29.75A66.57,66.57,0,0,0,67.21,8.11Zm-64.47,84a66.75,66.75,0,0,0,111.8,29.77A61.43,61.43,0,0,1,16.12,92.14h-2.8a64.14,64.14,0,0,0,57.17,46.67c-1.09.06-2.18.08-3.28.08A64.07,64.07,0,0,1,5.53,92.14Z"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
