import { useColor } from "@/theme/hooks/useColor";
import { LabelInput } from "@/ui/input/label-input";
import { Formik, yupToFormErrors } from "formik";
import { Button, Text, View, TextInput } from "react-native";
import { SignInSchema } from "../validations/sign-in.schema";
import { InvalidField } from "@/ui/input/invalid-field";
import { MainButton } from "@/ui/buttons/main-button";
import { useLogin } from "../hooks/useLogin";
import { MessageError } from "../../Api-request/on-error/message-error";

export function SignInForm() {
  const color = useColor();
  const { loginQuery, isPending, error } = useLogin();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        loginQuery({ email: values.email, password: values.password });
      }}
      validationSchema={SignInSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color.background,
          }}
        >
          <View style={{ padding: 5 }}>
            <View style={{ paddingTop: 4 }}>
              <LabelInput
                label="Email"
                onChangeText={handleChange("email")}
                onBlur={() => {
                  handleBlur("email");
                }}
                value={values.email}
                placeholder={"placeholder"}
              />
              <InvalidField message={errors.email} />
            </View>
            <View style={{ paddingTop: 4 }}>
              <LabelInput
                placeholder="Password"
                label="Password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={() => {
                  handleBlur("password");
                }}
                value={values.password}
              />
              <InvalidField message={errors.password} />
            </View>
            <View style={{ paddingTop: 15 }}>
              <MainButton
                title="Sign In"
                onPress={handleSubmit}
                disabled={isPending || Object.keys(errors).length > 0}
              />
            </View>
            <MessageError error={error} />
          </View>
        </View>
      )}
    </Formik>
  );
}

/*
function SignInFormContent({ values, handleChange, handleSubmit }) {
  const color = useColor();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.background,
      }}
    >
      <Text style={{ color: color.text }}>Sign In Screen</Text>
      <View style={{ padding: 20 }}>
        <View style={{ padding: 5 }}>
          <LabelInput placeholder="Email" label="Email" />
        </View>
        <View style={{ padding: 5 }}>
          <LabelInput placeholder="Password" label="Password" />
        </View>
      </View>
    </View>
  );
}
*/
