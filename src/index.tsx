import React from "react";
import ReactDOM from "react-dom/client";
import TextExpander from "./components/TextExpander/TextExpander.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TextExpander>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex omnis
      nam eligendi consectetur et odio fuga nisi voluptatum, sit aperiam
      deserunt debitis consequuntur dolore autem odit perspiciatis laudantium
      quia!
    </TextExpander>
    <TextExpander showText={true} showButtnColor="red" showPercent={10}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aut
      deserunt exercitationem optio at maiores accusamus blanditiis earum,
      excepturi minima molestias reprehenderit incidunt, doloribus explicabo
      facere dolore tempore. Quis, quaerat?
    </TextExpander>
  </React.StrictMode>
);
