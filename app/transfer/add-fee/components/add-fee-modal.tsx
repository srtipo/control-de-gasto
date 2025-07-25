import { DetailsModal } from "@/ui/modals/details-modal/details-modal";
import { SimpleTitle } from "@/ui/text/simple-titl";

import { FeeAccount } from "../enums/fee-account-enum";
import { AddFeeForm } from "./add-fee-form";

export function AddFeeModal({
  addFee,
}: {
  addFee: (value: number, account: FeeAccount, valueType: string) => void;
}) {
  return (
    <DetailsModal>
      <SimpleTitle text="Añadir comisión" style={{ paddingBlock: 10 }} />
      <AddFeeForm addFee={addFee} />
    </DetailsModal>
  );
}
