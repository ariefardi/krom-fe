import useCreateHooks, { validationSchema } from './create.hook';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import countryOptions from '../../Constants/country.json';
import { Link } from 'react-router-dom';

function CreatePage() {
  const { roles, handleSubmit } = useCreateHooks();
  return (
    <div className="flex flex-col container">
      <Link
        to="/"
        className="bg-green-900 w-full h-[60px] text-white font-bold px-4 flex items-center"
      >
        Application Tracker
      </Link>

      <div className="text-3xl font-bold mt-10">
        Upload a new candidate application
      </div>

      <div className="border shadow-lg bg-white mt-10 flex flex-col p-10">
        <Formik
          initialValues={{
            candidate_full_name: '',
            candidate_phone_number: '',
            candidate_email_address: '',
            candidate_yoe: '',
            candidate_role_id: '',
            candidate_location: '',
            candidate_resume_url: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Row 1: Full Name & Phone Number */}
              <div className="flex flex-row">
                <div className="flex-1 flex-col flex">
                  <label className="font-bold">Full Name</label>
                  <Field
                    type="text"
                    name="candidate_full_name"
                    className="border w-full rounded-sm px-2 py-2"
                    placeholder="Enter first and last name"
                  />
                  <ErrorMessage
                    name="candidate_full_name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-[40px]"></div>
                <div className="flex-1 flex-col flex">
                  <label className="font-bold">Phone No.</label>
                  <Field
                    type="text"
                    name="candidate_phone_number"
                    className="border w-full rounded-sm px-2 py-2"
                    placeholder="Enter phone number include country prefix"
                  />
                  <ErrorMessage
                    name="candidate_phone_number"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="h-6"></div>

              <div className="flex flex-row">
                <div className="flex-1 flex-col flex">
                  <label className="font-bold">Email Address</label>
                  <Field
                    type="text"
                    name="candidate_email_address"
                    className="border w-full rounded-sm px-2 py-2"
                    placeholder="Enter email address"
                  />
                  <ErrorMessage
                    name="candidate_email_address"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-[40px]"></div>
                <div className="flex-1 flex-col flex">
                  <label className="font-bold">Role</label>
                  <Field
                    as="select"
                    name="candidate_role_id"
                    className="border w-full rounded-sm px-2 py-2"
                  >
                    <option value="">Select a Role</option>
                    {roles.map(role => (
                      <option key={role.id} value={role.id}>
                        {role.role_name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="candidate_role_id"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="h-6"></div>

              <div className="flex flex-row">
                <div className="flex-1 flex-col flex">
                  <label className="font-bold">Years of experience</label>
                  <Field
                    type="number"
                    name="candidate_yoe"
                    className="border w-full rounded-sm px-2 py-2"
                    placeholder="e.g 5"
                  />
                  <ErrorMessage
                    name="candidate_yoe"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-[40px]"></div>
                <div className="flex-1 flex-col flex">
                  <label className="font-bold">Location</label>
                  <Field
                    as="select"
                    name="candidate_location"
                    className="border w-full rounded-sm px-2 py-2"
                  >
                    <option value="">Select a Location</option>
                    {countryOptions.map((location, i) => (
                      <option key={i} value={location.name}>
                        {location.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="candidate_location"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="h-12"></div>

              <div className="bg-gray-200 flex items-center justify-center h-40 flex flex-col">
                <div>Upload resume url</div>
                <div className="h-[20px]"></div>
                <div>
                  <Field
                    type="text"
                    name="candidate_resume_url"
                    className="bg-white border rounded-sm w-[500px] h-[40px] px-2"
                    placeholder="Enter resume url"
                  />
                  <ErrorMessage
                    name="candidate_resume_url"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center mt-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-900 text-center font-bold text-white py-2 w-[200px] rounded-sm cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreatePage;
