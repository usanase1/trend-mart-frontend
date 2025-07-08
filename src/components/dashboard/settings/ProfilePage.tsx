import AccountSettingsForm from "./AccountSettingsForm";
import AddressForm from "./AddressForm";
import ChangePasswordForm from "./ChangePasswordForm";

export default function ProfilePage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <AccountSettingsForm />
      <div className="grid md:grid-cols-2 gap-6">
        <AddressForm title="Billing Address" />
        <AddressForm title="Shipping Address" />
      </div>
      <ChangePasswordForm />
    </div>
  );
}
