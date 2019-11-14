import React from "react";
import PropTypes from "prop-types";

import { AvatarBlock, Card, Counter, Image, Icon, Stack } from "../../index";
import { Element } from "./shot.elements.js";

function Shot() {
  return <div>
      <Card
      width="150px">
    <Image
      height={150}
      src="https://cdn.dribbble.com/users/666045/screenshots/3611646/artboard_3.png"
      width={200}
    />
  </Card>
  <AvatarBlock
  name="Guille Mesyngier"
  url="https://dribbble.com/gmesyngier"
  avatar="https://cdn.dribbble.com/users/927565/avatars/normal/871881bb1267479631c106f2985c93b9.jpg"
/>
    </div>
  
  
}

Shot.defaultProps = {
  //
};

Shot.propTypes = {
  //
};

export { Shot };
