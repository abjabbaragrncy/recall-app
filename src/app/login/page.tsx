'use client'
import React from "react";

export default function page() {
  return (
    <section className="z-10">
      <div>
        <h2>Login to Your Account</h2>
        <p>Let’s login to your account to continue where you left.</p>
        <form action="">
          <input type="email" name="email" id="" className="border rounded-full" />
          <input type="password" name="password" id="" className="border rounded-full" />
        </form>
      </div>
    </section>
  );
}
