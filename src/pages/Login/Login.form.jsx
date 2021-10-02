import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { auth, usersCollection } from "../../firebase";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [formError, setFormError] = useState("");

  async function createInDb(astronautId) {
    await usersCollection.doc(astronautId).set({
      astronautId,
    });
  }

  async function signInOrCreateAccountAndSignIn(astronautId) {
    const email = `${astronautId}@gransalto.com`;
    try {
      await auth.createUserWithEmailAndPassword(email, email);
      await createInDb(email);
    } catch (error) {
      console.log(error);
      if (
        isFirebaseError(error) &&
        error.code === "auth/email-already-in-use"
      ) {
        await auth.signInWithEmailAndPassword(email, email);
        return;
      }
      throw error;
    }
  }

  async function handleLogin({ astronautId }) {
    try {
      await signInOrCreateAccountAndSignIn(astronautId);
    } catch (error) {
      console.log(error);
      setFormError("Error desconocido");
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Astronaut id
        </label>
        <input
          type="text"
          class="form-control"
          {...register("astronautId", {
            required: {
              message: "Please enter your astronaut id",
              value: true,
            },
          })}
        />
        <p id="emailHelp fs-6" class="form-text">
          {errors?.astronautId?.message}
        </p>
      </div>
      <small className="text-danger">{formError}</small>
      <div className="d-flex justify-content-end">
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
