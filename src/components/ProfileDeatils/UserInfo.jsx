import UseInput from "../../utils/useInput";
import SaveButton from "./saveButton";

const UserInfo = () => {
  const { storeEmail, storeLastName, storeFirstName, handleInfoChange } =
    UseInput();
  return (
    <form onSubmit={(e) => handleInfoChange(e)}>
      <section className="bg-gray-100 rounded-lg p-3 py-4 pb-5 w-full">
        <section className="grid gap-y-4">
          {/* Getting the user information */}
          <section className="flex items-center justify-between text-lg">
            <label className="text-gray-600" htmlFor="Firstname">
              First name*
            </label>
            <input
              className="py-2 w-96 px-4 rounded-lg shadow-md shadow-purple-300 border placeholder:text-sm focus:border-purple-500"
              type="text"
              name="firstname"
              id="FirstName"
              placeholder="Enter your firstname"
              required
              onChange={(e) => storeFirstName(e)}
            />
          </section>
          <section className="flex items-center justify-between text-lg">
            <label className="text-gray-600" htmlFor="Lastname">
              Last name*
            </label>
            <input
              className="py-2 w-96 px-4 rounded-lg shadow-md shadow-purple-300 border placeholder:text-sm focus:border-purple-500"
              type="text"
              name="lastname"
              id="Lastname"
              placeholder="Enter your lastname"
              required
              onChange={(e) => storeLastName(e)}
            />
          </section>
          <section className="flex items-center justify-between text-lg">
            <label className="text-gray-600" htmlFor="Email">
              Email*
            </label>
            <input
              className="py-2 w-96 px-4 rounded-lg shadow-md shadow-purple-300 border placeholder:text-sm focus:border-purple-500"
              type="email"
              id="Email"
              placeholder="Enter your email address"
              required
              onChange={(e) => storeEmail(e)}
            />
          </section>
        </section>
      </section>
      <SaveButton />
    </form>
  );
};

export default UserInfo;
