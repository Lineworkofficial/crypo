import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function signup() {
  return (
    <Layout>
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <span>Create Account</span>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="form-checkbox"
                required
              />
              <label className="custom-control-label" htmlFor="form-checkbox">
                I agree to the{' '}
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </form>
          <h2>
            Already have an account?
            <Link href="/login"> Sign in here</Link>
          </h2>
        </div>
      </div>
    </Layout>
  );
}
