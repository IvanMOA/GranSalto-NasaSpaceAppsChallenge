import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { auth, usersCollection } from "../../firebase";
import { getUserByEmployeeId } from "../../services/usersApi";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [formError, setFormError] = useState("");

  async function signInOrCreateAccountAndSignIn({ employeeId, role }) {
    const email = `${employeeId}@gransalto.com`;
    const user = await getUserByEmployeeId(employeeId);
    if (user !== null && user?.role !== role) {
      setFormError(
        `This user's role is ${user.role}, please select your role correcty`
      );
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, email);
      await usersCollection.doc(user.uid).set({
        uid: user.uid,
        employeeId,
        role,
      });
    } catch (error) {
      console.log(error);
      if (error?.code === "auth/email-already-in-use") {
        await auth.signInWithEmailAndPassword(email, email);
        return;
      }
      throw error;
    }
  }

  async function handleLogin({ employeeId, role }) {
    try {
      await signInOrCreateAccountAndSignIn({ employeeId, role });
    } catch (error) {
      console.log(error);
      setFormError("Something went wrong, please try again");
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Employee id
        </label>
        <input
          type="text"
          class="form-control"
          {...register("employeeId", {
            required: {
              message: "Please enter your employee id",
              value: true,
            },
          })}
        />
        <p id="emailHelp fs-6" class="form-text">
          {errors?.astronautId?.message}
        </p>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Role
        </label>
        <select
          {...register("role", {
            validate: function (value) {
              if (value === "Select a role") return "Please select your role";
              return true;
            },
          })}
          class="form-select"
          aria-label="Default select example"
        >
          <option selected disabled>
            Select a role
          </option>
          <option value="astronaut">Astronaut</option>
          <option value="scientific">Scientific</option>
        </select>
        <p id="emailHelp fs-6" class="form-text">
          {errors?.astronautId?.message}
        </p>
      </div>

      <small className="text-danger mb-2">{formError}</small>
      <div className="d-flex justify-content-end mt-3">
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary"
        >
          Log in
        </button>
      </div>
    </form>
  );
};
