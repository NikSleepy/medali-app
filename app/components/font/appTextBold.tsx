import { Text, TextProps } from "react-native";
// for use please dont add style bold, because it will be added automatically and will cause error
export default function AppTextBold({ style, ...props }: TextProps) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: "Poppins_600SemiBold" }, style]}
    />
  );
}
