import { MainButton } from "@/ui/buttons/main-button";
import { Input } from "@/ui/input/input";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { Write } from "@/ui/text/write";
import { Formik } from "formik";
import { View } from "react-native";
import { CategoryTypeRadio } from "./category-type-radio";
import { createCategoryFormValidation } from "../domain/create-category-form-validation";
import { useColor } from "@/theme/hooks/useColor";
import { useCreateCategory } from "../../hooks/useCreateCategory";
import { TransactionTypeEnum } from "@/enums/transaction-type-enum";

export function CreateCategoryForm() {
  const color = useColor();
  const { createCategory } = useCreateCategory();
  return (
    <View style={{ paddingTop: 20 }}>
      <View style={{ paddingBlock: 10 }}>
        <SimpleTitle text="Nueva Categoría"></SimpleTitle>
      </View>
      <View style={{ paddingBlock: 10 }}>
        <Formik
          initialValues={{
            name: "",
            type: TransactionTypeEnum.EXPENSE,
            description: "",
          }}
          onSubmit={(values) => {
            createCategory(values);
          }}
          validationSchema={createCategoryFormValidation}
        >
          {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
            <View>
              <View
                style={{
                  paddingBlock: 10,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Write text="Tipo:" />
                <CategoryTypeRadio
                  value={values.type}
                  onChange={(value: string) => setFieldValue("type", value)}
                />
              </View>
              <View style={{ paddingBlock: 10 }}>
                <Write text="Nombre" />
                <Input
                  error={errors.name}
                  boxStyle={{ width: "100%" }}
                  value={values.name}
                  onChangeText={handleChange("name")}
                  maxLength={20}
                />
                {errors.name && (
                  <Write text={errors.name} style={{ color: color.error }} />
                )}
              </View>
              <View style={{ paddingBlock: 10 }}>
                <Write text="Descripción" />
                <Input
                  error={errors.description}
                  boxStyle={{ width: "100%" }}
                  value={values.description}
                  onChangeText={handleChange("description")}
                  maxLength={40}
                />
                {errors.description && (
                  <Write
                    text={errors.description}
                    style={{ color: color.error }}
                  />
                )}
              </View>

              <View>
                <MainButton
                  title="Añadir categoría"
                  onPress={handleSubmit}
                  disabled={!values.name || !values.type}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
