import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function reset() {
  return (
    <Layout>
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <span>Reset password</span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email Address"
            />
            <button type="submit" className="btn btn-primary">
              Reset
            </button>
            <h2>
              Remember Password?
              <Link href="/login"> Sign in here</Link>
            </h2>
          </form>
        </div>
      </div>
    </Layout>
  );
}
