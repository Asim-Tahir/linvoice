import { Link } from "react-router-dom";

import ImageLight from "@linvoice/assets/images/login-office.jpeg";
import ImageDark from "@linvoice/assets/images/login-office-dark.jpeg";

import Icon from "@linvoice/icon";
import { Label, Input, Button } from "@windmill/react-ui";

export default function Login(): React.ReactElement {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="john@doe.com"
                />
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  placeholder="***************"
                  autoComplete="current-password"
                />
              </Label>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <Button
                className="mt-4"
                block
                tag={Link}
                to="/dashboard/invoices"
              >
                Log in
              </Button>
              <hr className="my-8" />
              <Button block layout="outline">
                <Icon
                  name="github"
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                />
                Github
              </Button>
              <Button className="mt-4" block layout="outline">
                <Icon
                  name="twitter"
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  color="#02e"
                />
                Twitter
              </Button>
              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/account/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/account/register"
                >
                  Create account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
