import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function otpVerify() {
  return (
    <Layout>
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <span>Locked</span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
            <button type="submit" className="btn btn-primary">
              Unlock
            </button>
            <h2>
              No luck? <Link href="/reset">Reset Password</Link>
            </h2>
          </form>
        </div>
      </div>
    </Layout>
  );
}
