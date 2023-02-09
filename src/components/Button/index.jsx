import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Icon } from "@rneui/base";

import Colors from '../../global/style'

import styles from "./styles";

const Button = ({ colorButton, colorText, colorBorder, title, link, ...rest }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: link ? "transparent" : colorButton,
        borderColor: colorBorder,
      }}
      {...rest}
    >
      <Text
        style={{
          ...styles.titleButton,
          color: link ?  Colors.primaryColor :  colorText,
        }}
      >
        {title}
      </Text>
      {link ? (
        <Icon
          name="arrow-forward"
          type="material"
          size={18}
          color = {Colors.whiteColor}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default Button;