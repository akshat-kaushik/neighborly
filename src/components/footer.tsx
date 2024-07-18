import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              Neighbourly
            </div>
            <div className="flex mt-2 justify-center text-teal-600 sm:justify-start">
              Created By
              <a href="https://twitter.com/Akshatkaushik_">
                <Avatar>
                  <AvatarImage src="https://github.com/akshat-kaushik.png" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
              </a>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
