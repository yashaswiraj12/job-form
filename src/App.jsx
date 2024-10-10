
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    // Handling the file upload (photo)
    const photoFile = data.photo[0]; // Extract the uploaded file from the FileList
    const formData = { ...data, photo: photoFile.name }; // Adding the file name to the data object

    // Simulating an API call for submitting the data
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Form data submitted:", formData); // Print all form data, including the file name
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Job Application</h2>

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            {...register("firstName", {
              required: "First name is required",
              maxLength: {
                value: 20,
                message: "First name must be less than 20 characters",
              },
              minLength: {
                value: 5,
                message: "First name must be at least 5 characters",
              },
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.firstName ? "border-red-500" : ""
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Last name must contain only letters",
              },
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.lastName ? "border-red-500" : ""
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dob", {
              required: "Date of birth is required",
              validate: {
                isAdult: (value) => {
                  const currentDate = new Date();
                  const dob = new Date(value);
                  const age = currentDate.getFullYear() - dob.getFullYear();
                  return age >= 18 || "You must be at least 18 years old";
                },
              },
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.dob ? "border-red-500" : ""
            }`}
          />
          {errors.dob && (
            <p className="text-red-500 text-xs italic">{errors.dob.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Phone number must contain only digits",
              },
              minLength: {
                value: 10,
                message: "Phone number must be 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Phone number must be 10 digits",
              },
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="mb-4">
          <h3 className="text-lg font-bold">Address</h3>

          {/* Country */}
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Country
            </label>
            <input
              {...register("country", {
                required: "Country is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/i,
                  message: "Country must contain only letters",
                },
              })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.country ? "border-red-500" : ""
              }`}
            />
            {errors.country && (
              <p className="text-red-500 text-xs italic">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* State */}
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              State
            </label>
            <input
              {...register("state", {
                required: "State is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/i,
                  message: "State must contain only letters",
                },
              })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.state ? "border-red-500" : ""
              }`}
            />
            {errors.state && (
              <p className="text-red-500 text-xs italic">{errors.state.message}</p>
            )}
          </div>

          {/* District */}
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              District
            </label>
            <input
              {...register("district", {
                required: "District is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/i,
                  message: "District must contain only letters",
                },
              })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.district ? "border-red-500" : ""
              }`}
            />
            {errors.district && (
              <p className="text-red-500 text-xs italic">
                {errors.district.message}
              </p>
            )}
          </div>

          {/* Landmark */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Landmark
            </label>
            <input
              {...register("landmark")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        {/* eductional qualification  */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Highest Qualification
          </label>
          <select
            {...register("qualification", {
              required: "Qualification is required",
            })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.qualification ? "border-red-500" : ""
            }`}
          >
            <option value="">Select your qualification</option>
            <option value="highschool">High School</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">Ph.D.</option>
          </select>
          {errors.qualification && (
            <p className="text-red-500 text-xs italic">
              {errors.qualification.message}
            </p>
          )}
        </div>

        {/* Photo Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Photo
          </label>
          <input
            type="file"
            {...register("photo", {
              required: "Please upload a photo",
              validate: {
                acceptedFormats: (file) =>
                  ["image/jpeg", "image/png", "image/jpg"].includes(
                    file[0]?.type
                  ) || "Only .jpg and .png formats are allowed",
                maxFileSize: (file) =>
                  file[0]?.size <= 2000000 || "File size must be under 2MB",
              },
            })}
            className={`block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 ${
              errors.photo ? "border-red-500" : ""
            }`}
          />
          {errors.photo && (
            <p className="text-red-500 text-xs italic">{errors.photo.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
