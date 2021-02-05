import React from "react";

// import styled from "styled-components";

const RepositoryItem = () => {
  return (
    <div>
      <p>title</p>
      <p>description</p>
      <div>
        <p class="Repo_footerItem_vaj62s">C</p>
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>star</title>
            <path
              d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"
              fill="#000"
              fill-rule="evenodd"
            />
          </svg>
          <p>0</p>
        </div>
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 10 16"
            xmlns="http://www.w3.org/2000/svg"
            class="Repo_footerIcon_1rcbo1g"
          >
            <title>repo-forked</title>
            <path
              d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              fill="#000"
              fill-rule="evenodd"
            />
          </svg>
          <p>0</p>
        </div>
        <p class="">last push 5 days ago</p>
      </div>
    </div>
  );
};

export default RepositoryItem;
