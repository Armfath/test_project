const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative flex min-h-screen items-center justify-center bg-gray-100 sm:px-16">
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">{children} </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
