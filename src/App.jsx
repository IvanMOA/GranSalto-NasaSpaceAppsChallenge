import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
} from "firebase/auth";
import { query, collection, setDoc, addDoc, doc } from "firebase/firestore";

// const usersCollection = collection(db, "usuarios");
// const axelDoc = doc(db, "jJbh6nH6DPRs0aBsG0oE");

const App = () => {
  const [email, setEmail] = useState("");
  function onEmailChange(e) {
    setEmail(e.target.value);
  }
  const [password, setPassword] = useState("");
  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  const [registering, setRegistering] = useState(false);

  async function onRegister() {
    setRegistering(true);
    const user = await createUserWithEmailAndPassword(auth, email, password);
    const userDocumentRef = doc(db, "usuarios", user.user.uid);
    await setDoc(userDocumentRef, { email: email });
    user.user.displayName = "Axel Ivan";
    setRegistering(false);
  }

  return (
    <div className="App p-4">
      <form>
        <label for="basic-url" class="form-label">
          Email
        </label>
        <div class="input-group mb-3">
          <input
            value={email}
            onChange={onEmailChange}
            type="email"
            class="form-control"
            placeholder="Correo"
          />
        </div>
        <label for="basic-url" class="form-label">
          Password
        </label>
        <div class="input-group mb-3">
          <input
            value={password}
            onChange={onPasswordChange}
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <button
          disabled={registering}
          class="btn btn-primary"
          onClick={onRegister}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default App;
